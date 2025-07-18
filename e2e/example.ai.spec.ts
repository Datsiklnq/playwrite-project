import { test } from "@playwright/test";
import { extractRandomUser, getTestData } from "../utils/ai/aiUtils";
import { LoginPage } from "../page_object/pages/base_pages/LoginPage";

test("register new user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  const raw = await getTestData("Generate fake user data in JSON format");
  const { lastName, email } = extractRandomUser(raw);
  console.log("AI raw output:", raw);

  //   await page.goto("/register");
  await page.fill("#email", email);
  await page.fill("#password", lastName);
  await page.click("[data-testid='login-submit']");
});
