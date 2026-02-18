import { test, expect } from "playwright/test";

test.describe("Header navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("header is visible", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("logo links to home", async ({ page }) => {
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();
  });

  test("nav links work", async ({ page }) => {
    const navLinks = [
      { text: "Shop", href: "/shop/" },
      { text: "Track Order", href: "/tracking/" },
      { text: "Contact Us", href: "/contact/" },
    ];

    for (const link of navLinks) {
      const navLink = page.locator(`header a:has-text("${link.text}")`).first();
      if (await navLink.isVisible()) {
        await navLink.click();
        await page.waitForURL(`**${link.href}`);
        expect(page.url()).toContain(link.href);
        await page.goto("/");
      }
    }
  });

  test("cart icon is visible and clickable", async ({ page }) => {
    // Look for cart button/link in header
    const cartButton = page.locator('header [aria-label*="cart" i], header button:has(svg), header a[href="/cart"]').first();
    await expect(cartButton).toBeVisible();
  });

  test("no membership link in header", async ({ page }) => {
    const membershipLink = page.locator('header a[href*="membership"]');
    expect(await membershipLink.count()).toBe(0);
  });
});

test.describe("Footer navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("footer is visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("footer has legal links", async ({ page }) => {
    const legalLinks = [
      "Privacy Policy",
      "Terms of Service",
      "Refund Policy",
      "Shipping Policy",
      "Cookie Policy",
    ];

    for (const linkText of legalLinks) {
      const link = page.locator(`footer a:has-text("${linkText}")`).first();
      await expect(link).toBeVisible();
    }
  });

  test("no membership link in footer", async ({ page }) => {
    const membershipLink = page.locator('footer a[href*="membership"]');
    expect(await membershipLink.count()).toBe(0);
  });

  test("footer shows HappyPaws branding", async ({ page }) => {
    const footerText = await page.locator("footer").textContent();
    expect(footerText).toContain("HappyPaws");
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("mobile menu button exists", async ({ page }) => {
    await page.goto("/");
    // Look for hamburger/menu button (aria-label="Toggle menu")
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
  });
});
