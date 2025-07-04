🎭 Playwright Automation Framework
This is an end-to-end test automation framework built with Playwright, designed to support scalable testing across multiple environments using the Page Object Model, test metadata, and GitHub Actions CI.

📁 Folder Structure

playwright-project/
├── e2e/                            # Test specs
├── page_object/                   # Page Object Model files
├── utils/
│   ├── constants/                 # Enum definitions
│   ├── env/                       # Environment configs
│   │   └── env_data/             # Per-environment data (QA, Stage, etc.)
│   ├── helpers/                  # Reusable functions (e.g., assertions)
│   └── testMeta.ts               # Test metadata by test case ID
├── types/                         # TypeScript interfaces
├── .github/workflows/            # CI pipelines
├── playwright.config.ts          # Playwright global config


🚀 Getting Started
1. Install dependencies
npm install

3. Run tests in specific environment
npx playwright test -- --env QA
Supported environments:
QA
Stage
UAT
(Defined in utils/env/env.var.ts and env_data/)

🧱 Features
✅ Page Object Model (POM)
Organizes UI logic in reusable classes (e.g., LoginPage).

✅ Environment Support
Switch environments dynamically using --env flag.

✅ Metadata by Test Case ID
Store test name, tags, expected messages etc. in testMeta.ts.

ts
Copy
Edit
testMeta[12346].message?.expectedMessage
✅ Enum-Based Assertions
LoginMessages.INVALID_CREDENTIALS

✅ GitHub Actions Integration
Runs tests across environments via matrix build.

strategy:
  matrix:
    env: [qa, stage, uat]
🧪 Example Test

test('Invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('invalid_user', 'wrong_password');
  await loginPage.verifyErrorMessage(testMeta[12346].message?.expectedMessage);
});

📜 Custom Metadata Format

export const testMeta = {
  12345: {
    name: "Valid Login Test",
    description: "Should login successfully with valid credentials.",
    tags: ["smoke", "login"],
  },
  12346: {
    name: "Invalid Login Test",
    description: "Should show error message with invalid credentials.",
    tags: ["negative", "login"],
    message: {
      expectedMessage: "Username and password do not match any user in this service",
    },
  },
};
🧰 Scripts
Command	Description
npx playwright test	Run all tests
npx playwright test -- --env QA	Run with QA config
npx playwright show-report	Open HTML report

💡 Future Enhancements
 Add Allure or HTML reporting

 Add test data fixtures per test case

 Introduce API testing layer

 Visual regression testing

 Slack/Teams notifications via GitHub Actions

🤝 Contributing
Pull requests are welcome. Please follow best practices and ensure tests are passing before submitting.

