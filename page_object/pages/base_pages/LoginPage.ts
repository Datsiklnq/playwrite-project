import { Page, Locator, expect } from "@playwright/test";
import { EnvirData } from "../../../utils/env/env.data";
const environmentVariables = () => new EnvirData();

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passowrdInput: Locator;
  readonly emailInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly cookiesAcceptModal: Locator;
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passowrdInput = page.locator("#password");
    this.emailInput = page.locator("#email");
    this.loginButton = page.locator("[data-testid='login-submit']");
    this.errorMessage = page.locator("[data-testid='alert-message']");
    this.cookiesAcceptModal = page.locator("#rcc-confirm-button");
  }
  //
  async open() {
    await this.page.goto(`${environmentVariables().appUrl}/notes/app/login`);
  }

  async login(emailInput: string, passowrdInput: string) {
    await this.cookiesAccept();
    await this.emailInput.fill(emailInput);
    await this.passowrdInput.fill(passowrdInput);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }
  async verifyErrorMessage(expectedMessage?: string) {
    if (!expectedMessage) {
      throw new Error("Expected error message is not provided.");
    }

    const actualMessage = await this.getErrorMessage();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }

  async cookiesAccept() {
    if (await this.cookiesAcceptModal.isVisible()) {
      await this.cookiesAcceptModal.click();
      await expect(this.cookiesAcceptModal).not.toBeVisible({ timeout: 5000 });
    }
  }
}
