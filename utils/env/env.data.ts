import { EnvVar } from "./env.var";
import { QA_DATA } from "./env_data/qa";
import { STAGE_DATA } from "./env_data/stage";
import { UAT_DATA } from "./env_data/uat";

interface IEnvDataUrl {
  appApiCoreUrl: string;
  appUrl: string;
}

const ENV = {
  local: "localhost",
  qa: "qa",
  stage: "stage",
  uat: "uat",
};

const envirSingleton = EnvVar.getEnvVar();

class EnvirData {
  get envir(): string {
    return envirSingleton.toUpperCase();
  }
  get appUrl(): string {
    return this.envAppUrl.appUrl;
  }
  get appApiCoreUrl(): string {
    return this.envAppUrl.appApiCoreUrl;
  }

  getEnvData() {
    switch (this.envir) {
      case ENV.qa.toUpperCase():
        return QA_DATA;
      case ENV.stage.toUpperCase():
        return STAGE_DATA;
      case ENV.uat.toUpperCase():
        return UAT_DATA;
      default:
        throw new Error(`Incorrect environment was defined: ${this.envir}`);
    }
  }
  // apiCore url
  //https://practice.expandtesting.com/notes/app/
  //https://practice.expandtesting.com/notes/api/users/register
  private get envAppUrl(): IEnvDataUrl {
    switch (this.envir) {
      case ENV.qa.toUpperCase():
        return {
          appApiCoreUrl: `${this.buildUrl(
            "https",
            "practice.expandtesting.",
            "com"
          )}/notes/api/user/register`,
          appUrl: `${this.buildUrl("https", "practice.expandtesting.", "com")}`,
        };
      case ENV.stage.toUpperCase():
        return {
          appApiCoreUrl: `${this.buildUrl("https", "", "")}/api`,
          appUrl: `${this.buildUrl("https", "www.", "saucedemo.com")}`,
        };
      case ENV.uat.toUpperCase():
        return {
          appApiCoreUrl: `${this.buildUrl("https", "", "")}/api`,
          appUrl: `${this.buildUrl("https", "www.", "saucedemo.com")}`,
        };

      default:
        throw new Error(`Incorrect environment was defined: ${this.envir}`);
    }
  }

  private buildUrl(protocol: string, appName: string, domain: string): string {
    return `${protocol}://${appName}${domain}`;
  }
}

export { EnvirData };
