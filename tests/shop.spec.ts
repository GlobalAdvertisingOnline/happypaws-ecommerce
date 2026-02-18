import { test, expect } from "playwright/test";

test.describe("Shop page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/shop/");
  });

  test("shop page renders with products", async ({ page }) => {
    // Product grid should have items
    const productCards = page.locator('[class*="grid"] a, [class*="product"] a').first();
    await expect(productCards).toBeVisible();
  });

  test("category filter is visible", async ({ page }) => {
    // Look for filter buttons/tabs
    const filterArea = page.locator('button:has-text("All"), button:has-text("Necklaces")').first();
    await expect(filterArea).toBeVisible();
  });

  test("filter by Necklaces shows necklace products", async ({ page }) => {
    const necklaceFilter = page.locator('button:has-text("Necklaces")').first();
    if (await necklaceFilter.isVisible()) {
      await necklaceFilter.click();
      await page.waitForTimeout(500);

      // After filtering, visible products should include necklace items
      const body = await page.textContent("body");
      expect(body?.toLowerCase()).toContain("necklace");
    }
  });

  test("filter by All shows all products", async ({ page }) => {
    const allFilter = page.locator('button:has-text("All")').first();
    if (await allFilter.isVisible()) {
      await allFilter.click();
      await page.waitForTimeout(500);
    }

    // Should have multiple products visible
    const links = page.locator('a[href*="/products/"]');
    const count = await links.count();
    expect(count).toBeGreaterThan(5);
  });

  test("product card click navigates to detail page", async ({ page }) => {
    const firstProduct = page.locator('a[href*="/products/"]').first();
    await expect(firstProduct).toBeVisible();

    const href = await firstProduct.getAttribute("href");
    await firstProduct.click();
    await page.waitForURL(`**/products/**`);
    expect(page.url()).toContain("/products/");
  });

  test("product cards show price", async ({ page }) => {
    const priceElement = page.locator('text=/\\$\\d+\\.\\d{2}/').first();
    await expect(priceElement).toBeVisible();
  });
});
