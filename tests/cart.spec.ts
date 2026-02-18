import { test, expect } from "playwright/test";

test.describe("Cart functionality", () => {
  test("add item from product page", async ({ page }) => {
    // Go to shop and click first product
    await page.goto("/shop/");
    const firstProduct = page.locator('a[href*="/products/"]').first();
    await firstProduct.click();
    await page.waitForURL("**/products/**");

    // Click add to cart
    const addToCartBtn = page.locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")').first();
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();

    // Cart drawer or indicator should update
    await page.waitForTimeout(1000);

    // Navigate to cart page
    await page.goto("/cart/");
    const cartContent = await page.textContent("body");
    // Should have at least one item showing a price
    expect(cartContent).toMatch(/\$\d+\.\d{2}/);
  });

  test("empty cart shows empty state", async ({ page }) => {
    // Clear localStorage first
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("happypaws-cart"));

    await page.goto("/cart/");
    const body = await page.textContent("body");
    // Should show empty cart message or "continue shopping"
    const hasEmptyState =
      body?.toLowerCase().includes("empty") ||
      body?.toLowerCase().includes("no items") ||
      body?.toLowerCase().includes("continue shopping");
    expect(hasEmptyState).toBeTruthy();
  });

  test("no membership discount shown in cart", async ({ page }) => {
    await page.goto("/cart/");
    const body = await page.textContent("body");
    expect(body).not.toContain("membership");
    expect(body).not.toContain("NaturalRewards");
    expect(body?.toLowerCase()).not.toContain("member discount");
  });

  test("cart persists on page reload", async ({ page }) => {
    // Add an item
    await page.goto("/shop/");
    const firstProduct = page.locator('a[href*="/products/"]').first();
    await firstProduct.click();
    await page.waitForURL("**/products/**");

    const addToCartBtn = page.locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")').first();
    await addToCartBtn.click();
    await page.waitForTimeout(500);

    // Reload page
    await page.goto("/cart/");
    await page.reload();

    const body = await page.textContent("body");
    // Should still show cart items with price
    expect(body).toMatch(/\$\d+\.\d{2}/);
  });

  test("shipping shows correctly", async ({ page }) => {
    await page.goto("/shop/");
    const firstProduct = page.locator('a[href*="/products/"]').first();
    await firstProduct.click();
    await page.waitForURL("**/products/**");

    const addToCartBtn = page.locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")').first();
    await addToCartBtn.click();
    await page.waitForTimeout(500);

    await page.goto("/cart/");
    const body = await page.textContent("body");
    // Should show either shipping amount or free shipping
    const hasShipping =
      body?.includes("$5.99") ||
      body?.toLowerCase().includes("free shipping") ||
      body?.toLowerCase().includes("shipping");
    expect(hasShipping).toBeTruthy();
  });
});
