import { Locator, Page } from "@playwright/test";

export class LogoutHelper {
  readonly logoutButton: Locator;
  constructor(private page: Page) {
    this.logoutButton = page.locator("[data-testid='logout']");
  }

  async logout() {
    await this.logoutButton.isVisible();
    // await this.logoutButton.isEnabled();
    await this.logoutButton.click();
  }
}
