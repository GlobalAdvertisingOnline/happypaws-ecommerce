import { test, expect } from "playwright/test";

test.describe("Responsive design - Mobile (375px)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("home page renders on mobile", async ({ page }) => {
    await page.goto("/");
    const body = await page.textContent("body");
    expect(body?.length).toBeGreaterThan(200);
  });

  test("shop page renders on mobile", async ({ page }) => {
    await page.goto("/shop/");
    const productLink = page.locator('a[href*="/products/"]').first();
    await expect(productLink).toBeVisible();
  });

  test("checkout page renders on mobile", async ({ page }) => {
    await page.goto("/checkout/");
    const body = await page.textContent("body");
    expect(body?.length).toBeGreaterThan(200);
  });
});

test.describe("Responsive design - Tablet (768px)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("home page renders on tablet", async ({ page }) => {
    await page.goto("/");
    const body = await page.textContent("body");
    expect(body?.length).toBeGreaterThan(200);
  });

  test("shop page renders on tablet", async ({ page }) => {
    await page.goto("/shop/");
    const productLink = page.locator('a[href*="/products/"]').first();
    await expect(productLink).toBeVisible();
  });
});

test.describe("Responsive design - Desktop (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("home page renders on desktop with full layout", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});
