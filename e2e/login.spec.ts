import { test, expect } from "@playwright/test";
import { LoginPage } from "../page_object/pages/base_pages/LoginPage";
import { EnvirData } from "../utils/env/env.data";
import { testMeta } from "../data/loginData";
const environmentVariables = () => new EnvirData();

const { USER, PASSWORD } = environmentVariables().getEnvData();

test.describe("Login Tests", () => {
  test(`Test Case: ${testMeta[12345].name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(USER.standard_user, PASSWORD.standard_user_pass);
    await expect(page).toHaveURL(/inventory/); // Successful login lands on inventory page
  });

  test(`Test Case: ${testMeta[12346].name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(USER.locked_user, PASSWORD.locked_user_pass);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain("Username and password do not match");
  });
});
