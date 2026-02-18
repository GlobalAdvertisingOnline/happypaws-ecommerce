import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:8788",
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "npm run preview",
        port: 8788,
        timeout: 120000,
        reuseExistingServer: true,
      },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium", viewport: { width: 1280, height: 720 } },
    },
  ],
});
