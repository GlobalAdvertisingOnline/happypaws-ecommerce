import { test, expect } from "playwright/test";
import { STORE } from "./test-data";

const legalPages = [
  { name: "Privacy Policy", path: "/privacy-policy/" },
  { name: "Terms of Service", path: "/terms-of-service/" },
  { name: "Refund Policy", path: "/refund-policy/" },
  { name: "Shipping Policy", path: "/shipping-policy/" },
  { name: "Cookie Policy", path: "/cookie-policy/" },
  { name: "Do Not Sell", path: "/do-not-sell/" },
];

test.describe("Legal pages", () => {
  for (const legalPage of legalPages) {
    test(`${legalPage.name} renders with correct content`, async ({ page }) => {
      const response = await page.goto(legalPage.path);
      expect(response?.status()).toBeLessThan(400);

      const body = await page.textContent("body");

      // Has substantial content
      expect(body?.length).toBeGreaterThan(500);

      // Contains HappyPaws branding (not old store)
      expect(body).not.toContain("NaturalShopStore");
      expect(body).toContain(STORE.name);
    });
  }

  test("FAQ page renders", async ({ page }) => {
    const response = await page.goto("/faq/");
    expect(response?.status()).toBeLessThan(400);

    const body = await page.textContent("body");
    expect(body?.length).toBeGreaterThan(300);
    expect(body).not.toContain("NaturalShopStore");
    expect(body?.toLowerCase()).not.toContain("membership");
  });
});
