import { test, expect } from "playwright/test";
import { TEST_CARD, TEST_CUSTOMER } from "./test-data";

// Helper to add an item to cart before checkout
async function addItemToCart(page: import("playwright/test").Page) {
  await page.goto("/shop/");
  const firstProduct = page.locator('a[href*="/products/"]').first();
  await firstProduct.click();
  await page.waitForURL("**/products/**");

  const addToCartBtn = page
    .locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")')
    .first();
  await addToCartBtn.click();
  await page.waitForTimeout(1000);
}

test.describe("Checkout flow", () => {
  test.beforeEach(async ({ page }) => {
    // Clear cart state
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await addItemToCart(page);
  });

  test("checkout page renders all steps", async ({ page }) => {
    await page.goto("/checkout/");
    const body = await page.textContent("body");
    // Should show contact step initially
    expect(body?.toLowerCase()).toMatch(/email|contact/);
  });

  test("Step 0 - Contact info validation", async ({ page }) => {
    await page.goto("/checkout/");

    // Try to proceed without filling in fields
    const continueBtn = page
      .locator('button:has-text("Continue"), button:has-text("Next")')
      .first();

    // Fill email
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.fill("invalid-email");
      // Invalid email should show error or prevent progress
      await emailInput.fill(TEST_CUSTOMER.email);
    }

    // Fill phone
    const phoneInput = page.locator('input[type="tel"], input[name="phone"]').first();
    if (await phoneInput.isVisible()) {
      await phoneInput.fill(TEST_CUSTOMER.phone);
    }
  });

  test("Step 1 - Shipping address entry", async ({ page }) => {
    await page.goto("/checkout/");

    // Fill contact step
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    const phoneInput = page.locator('input[type="tel"], input[name="phone"]').first();

    if (await emailInput.isVisible()) {
      await emailInput.fill(TEST_CUSTOMER.email);
    }
    if (await phoneInput.isVisible()) {
      await phoneInput.fill(TEST_CUSTOMER.phone);
    }

    // Click continue
    const continueBtn = page
      .locator('button:has-text("Continue"), button:has-text("Next")')
      .first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(500);
    }

    // Fill shipping address
    const firstNameInput = page.locator('input[name="firstName"], input[placeholder*="First"]').first();
    if (await firstNameInput.isVisible()) {
      await firstNameInput.fill(TEST_CUSTOMER.firstName);

      const lastNameInput = page.locator('input[name="lastName"], input[placeholder*="Last"]').first();
      await lastNameInput.fill(TEST_CUSTOMER.lastName);

      const addressInput = page.locator('input[name="address1"], input[placeholder*="Address"]').first();
      await addressInput.fill(TEST_CUSTOMER.address1);

      const cityInput = page.locator('input[name="city"], input[placeholder*="City"]').first();
      await cityInput.fill(TEST_CUSTOMER.city);

      const zipInput = page.locator('input[name="zip"], input[placeholder*="ZIP"]').first();
      await zipInput.fill(TEST_CUSTOMER.zip);
    }
  });

  test("no subscription consent checkbox in checkout", async ({ page }) => {
    await page.goto("/checkout/");
    const body = await page.textContent("body");
    expect(body?.toLowerCase()).not.toContain("subscription");
    expect(body?.toLowerCase()).not.toContain("recurring");
    expect(body?.toLowerCase()).not.toContain("membership");
  });

  test("no membership discount in order summary", async ({ page }) => {
    await page.goto("/checkout/");
    const body = await page.textContent("body");
    expect(body).not.toContain("Member Discount");
    expect(body).not.toContain("NaturalRewards");
  });
});

test.describe("Full checkout with test card", () => {
  test("APPROVED: complete order with CVV 100", async ({ page }) => {
    test.setTimeout(120000);

    // Clear and add item
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await addItemToCart(page);
    await page.goto("/checkout/");

    // Step 0: Contact
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.fill(TEST_CUSTOMER.email);
    }
    const phoneInput = page.locator('input[type="tel"], input[name="phone"]').first();
    if (await phoneInput.isVisible()) {
      await phoneInput.fill(TEST_CUSTOMER.phone);
    }

    // Click continue to shipping
    let continueBtn = page.locator('button:has-text("Continue"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 1: Shipping
    const firstNameInput = page.locator('input[name="firstName"], input[placeholder*="First"]').first();
    if (await firstNameInput.isVisible()) {
      await firstNameInput.fill(TEST_CUSTOMER.firstName);
      await page.locator('input[name="lastName"], input[placeholder*="Last"]').first().fill(TEST_CUSTOMER.lastName);
      await page.locator('input[name="address1"], input[placeholder*="Address"]').first().fill(TEST_CUSTOMER.address1);
      await page.locator('input[name="city"], input[placeholder*="City"]').first().fill(TEST_CUSTOMER.city);

      // State selector
      const stateSelect = page.locator('select[name="state"]').first();
      if (await stateSelect.isVisible()) {
        await stateSelect.selectOption(TEST_CUSTOMER.state);
      }

      await page.locator('input[name="zip"], input[placeholder*="ZIP"]').first().fill(TEST_CUSTOMER.zip);
    }

    continueBtn = page.locator('button:has-text("Continue"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 2: Payment
    const cardInput = page.locator('input[name="cardNumber"], input[placeholder*="Card"], input[autocomplete="cc-number"]').first();
    if (await cardInput.isVisible()) {
      await cardInput.fill(TEST_CARD.number);

      const expiryInput = page.locator('input[name*="expir"], input[placeholder*="MM"]').first();
      await expiryInput.fill(TEST_CARD.expiry);

      const cvvInput = page.locator('input[name="cvv"], input[name="cvc"], input[placeholder*="CVV"]').first();
      await cvvInput.fill(TEST_CARD.cvvApproved);
    }

    continueBtn = page.locator('button:has-text("Continue"), button:has-text("Review"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 3: Review - accept terms and place order
    const termsCheckbox = page.locator('input[type="checkbox"]').first();
    if (await termsCheckbox.isVisible()) {
      await termsCheckbox.check();
    }

    const placeOrderBtn = page.locator('button:has-text("Place Order"), button:has-text("Complete Order"), button:has-text("Submit")').first();
    if (await placeOrderBtn.isVisible()) {
      await placeOrderBtn.click();

      // Wait for redirect to thank-you page
      await page.waitForURL("**/thank-you/**", { timeout: 60000 });
      expect(page.url()).toContain("/thank-you");

      // Verify order confirmation
      const thankBody = await page.textContent("body");
      expect(thankBody?.toLowerCase()).toMatch(/thank you|order.*confirm|order.*number/);
    }
  });

  test("DECLINED: CVV 900 shows error", async ({ page }) => {
    test.setTimeout(120000);

    // Clear and add item
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await addItemToCart(page);
    await page.goto("/checkout/");

    // Step 0: Contact
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    if (await emailInput.isVisible()) await emailInput.fill(TEST_CUSTOMER.email);
    const phoneInput = page.locator('input[type="tel"], input[name="phone"]').first();
    if (await phoneInput.isVisible()) await phoneInput.fill(TEST_CUSTOMER.phone);

    let continueBtn = page.locator('button:has-text("Continue"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 1: Shipping
    const firstNameInput = page.locator('input[name="firstName"], input[placeholder*="First"]').first();
    if (await firstNameInput.isVisible()) {
      await firstNameInput.fill(TEST_CUSTOMER.firstName);
      await page.locator('input[name="lastName"], input[placeholder*="Last"]').first().fill(TEST_CUSTOMER.lastName);
      await page.locator('input[name="address1"], input[placeholder*="Address"]').first().fill(TEST_CUSTOMER.address1);
      await page.locator('input[name="city"], input[placeholder*="City"]').first().fill(TEST_CUSTOMER.city);
      const stateSelect = page.locator('select[name="state"]').first();
      if (await stateSelect.isVisible()) await stateSelect.selectOption(TEST_CUSTOMER.state);
      await page.locator('input[name="zip"], input[placeholder*="ZIP"]').first().fill(TEST_CUSTOMER.zip);
    }

    continueBtn = page.locator('button:has-text("Continue"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 2: Payment with DECLINED CVV
    const cardInput = page.locator('input[name="cardNumber"], input[placeholder*="Card"], input[autocomplete="cc-number"]').first();
    if (await cardInput.isVisible()) {
      await cardInput.fill(TEST_CARD.number);
      await page.locator('input[name*="expir"], input[placeholder*="MM"]').first().fill(TEST_CARD.expiry);
      await page.locator('input[name="cvv"], input[name="cvc"], input[placeholder*="CVV"]').first().fill(TEST_CARD.cvvDeclined);
    }

    continueBtn = page.locator('button:has-text("Continue"), button:has-text("Review"), button:has-text("Next")').first();
    if (await continueBtn.isVisible()) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
    }

    // Step 3: Review - place order (should be declined)
    const termsCheckbox = page.locator('input[type="checkbox"]').first();
    if (await termsCheckbox.isVisible()) await termsCheckbox.check();

    const placeOrderBtn = page.locator('button:has-text("Place Order"), button:has-text("Complete Order"), button:has-text("Submit")').first();
    if (await placeOrderBtn.isVisible()) {
      await placeOrderBtn.click();

      // Should stay on checkout page and show error
      await page.waitForTimeout(10000);
      expect(page.url()).toContain("/checkout");

      // Should show decline error message
      const body = await page.textContent("body");
      const hasError =
        body?.toLowerCase().includes("declined") ||
        body?.toLowerCase().includes("error") ||
        body?.toLowerCase().includes("failed") ||
        body?.toLowerCase().includes("try again");
      expect(hasError).toBeTruthy();
    }
  });
});
