import { Page, Locator } from "@playwright/test";
import { EnvirData } from "../../../utils/env/env.data";

const environmentVariables = () => new EnvirData();

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passowrdInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passowrdInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator("[data-test='error']");
  }

  async open() {
    await this.page.goto(`${environmentVariables().appUrl}/`);
  }

  async login(usernameInput: string, passowrdInput: string) {
    await this.usernameInput.fill(usernameInput);
    await this.passowrdInput.fill(passowrdInput);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }
}
