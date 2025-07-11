import { test, expect } from "@playwright/test";
import { LoginPage } from "../page_object/pages/base_pages/LoginPage";
import { EnvirData } from "../utils/env/env.data";
import { testData } from "../data/loginData";
import { createUser, generateUser } from "../utils/api/api.user.helper";
import { LogoutHelper } from "../helpers/LogoutHelper";

const environmentVariables = () => new EnvirData();

const { EMAIL, PASSWORD } = environmentVariables().getEnvData();

test.describe("Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test(`Test Case: ${testData[12345].name}`, async ({ page }) => {
    const user = generateUser();
    const response = await createUser(user);
    expect(response.status).toBe(201);
    await loginPage.login(user.email, user.password); //used user which has been generated
    await expect(page).toHaveURL(/app/); //Successful login lands on inventory page
  });

  test(`Test Case: ${testData[12346].name}`, async ({ page }) => {
    await loginPage.login(EMAIL.standard_user_email, PASSWORD.locked_user_pass); //predefined user
    const error = await loginPage.getErrorMessage();
    await loginPage.verifyErrorMessage(
      testData[12346].message?.expectedMessage
    );
  });
  test(`Test Case: ${testData[12347].name}`, async ({ page }) => {
    await loginPage.login(
      EMAIL.invalid_user_email,
      PASSWORD.standard_user_pass
    ); //predefined user
    const error = await loginPage.getErrorMessage();
    await loginPage.verifyErrorMessage(
      testData[12347].message?.expectedMessage
    );
  });
});
