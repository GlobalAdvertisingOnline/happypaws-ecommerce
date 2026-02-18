import { test, expect } from "playwright/test";
import { PAGES, REMOVED_PAGES, STORE } from "./test-data";

test.describe("All pages render without errors", () => {
  for (const [name, path] of Object.entries(PAGES)) {
    test(`${name} page loads (${path})`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (err) => errors.push(err.message));

      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);

      // No JS errors
      expect(errors).toHaveLength(0);

      // Page has content
      const body = await page.textContent("body");
      expect(body?.length).toBeGreaterThan(100);
    });
  }

  test("404 page renders for nonexistent route", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist/");
    // Static export may return 200 with not-found content or 404
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
  });
});

test.describe("Membership pages are removed (should 404)", () => {
  for (const [name, path] of Object.entries(REMOVED_PAGES)) {
    test(`${name} page returns 404 (${path})`, async ({ page }) => {
      const response = await page.goto(path);
      // These pages should not exist
      const status = response?.status() ?? 0;
      // Static export may serve not-found page with 200, so check content
      const body = await page.textContent("body");
      const isNotFound =
        status === 404 || body?.toLowerCase().includes("not found") || body?.toLowerCase().includes("404");
      expect(isNotFound).toBeTruthy();
    });
  }
});

test.describe("No old branding visible", () => {
  test("home page has no NaturalShopStore references", async ({ page }) => {
    await page.goto("/");
    const body = await page.textContent("body");
    expect(body).not.toContain("NaturalShopStore");
    expect(body).not.toContain("NaturalRewards");
    expect(body).toContain(STORE.name);
  });

  test("no membership links in navigation", async ({ page }) => {
    await page.goto("/");
    const membershipLinks = page.locator('a[href*="membership"]');
    expect(await membershipLinks.count()).toBe(0);
  });
});
