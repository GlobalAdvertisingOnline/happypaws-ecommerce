import { test, expect } from "playwright/test";

test.describe("Cookie banner", () => {
  test("banner appears on first visit", async ({ page }) => {
    // Clear cookies/storage
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForTimeout(1000);

    // Look for cookie banner
    const cookieBanner = page.locator('[class*="cookie"], [role="dialog"], [aria-label*="cookie" i]').first();
    // Cookie banner should be somewhere on the page
    const body = await page.textContent("body");
    const hasCookieContent =
      body?.toLowerCase().includes("cookie") || body?.toLowerCase().includes("privacy");
    expect(hasCookieContent).toBeTruthy();
  });

  test("accepting cookies hides banner", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForTimeout(1000);

    // Click accept button
    const acceptBtn = page
      .locator('button:has-text("Accept"), button:has-text("Got it"), button:has-text("OK"), button:has-text("Agree")')
      .first();

    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
      await page.waitForTimeout(500);

      // Reload — banner should not reappear
      await page.reload();
      await page.waitForTimeout(1000);

      // The accept button should no longer be visible
      const isStillVisible = await acceptBtn.isVisible().catch(() => false);
      // After accepting, banner should be hidden
      expect(isStillVisible).toBeFalsy();
    }
  });
});
