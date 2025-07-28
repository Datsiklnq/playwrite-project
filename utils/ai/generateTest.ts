import { getTestData } from "./aiUtils";
import fs from "fs";
import path from "path";
import readline from "readline";

// Prompt user via CLI
async function askUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    })
  );
}

async function main() {
  // 1. Get scenario input from user
  const userScenario = await askUser("🧠 Enter test scenario prompt: ");

  // 2. Prepare the full prompt for OpenAI with instructions matching your Playwright framework
  const detailedPrompt = `
Generate a Playwright test in TypeScript using the official @playwright/test framework.
Follow the Page Object Model (POM) pattern.
Use async/await syntax for all async calls.
Include a LoginPage class that accepts the Playwright 'page' object in the constructor.
LoginPage should have methods for navigation and login, and locators for username, password, login button, success message, and error message.
Write two tests inside a "describe" block:
  1. Successful login with correct credentials.
  2. Show error message with incorrect password.
Use Playwright's expect assertions like toBeVisible() and toHaveText().
Provide full TypeScript code for both the test file and the LoginPage class.

Scenario: ${userScenario}
  `.trim();

  console.log("🔍 Generating test from prompt...");

  // 3. Call OpenAI to generate test code
  const testCode = await getTestData(detailedPrompt);

  // 4. Validate response
  if (!testCode || testCode.trim().length < 10) {
    console.error("❌ No valid test code received from OpenAI.");
    return;
  }

  // Remove markdown code fences if present
  const cleanedTestCode = testCode
    .replace(/^```(typescript)?\s*/i, "") // remove starting ``` or ```typescript
    .replace(/```$/, "") // remove ending ```
    .trim();

  // 5. Prepare output folder and file name (timestamped to avoid overwrite)
  const folderPath = path.resolve(__dirname, "../../tests/ai");
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .slice(0, 19);
  const fileName = `generatedTest_${timestamp}.spec.ts`;
  const filePath = path.join(folderPath, fileName);

  // 6. Save cleaned generated test code to file
  fs.writeFileSync(filePath, cleanedTestCode);

  console.log(`✅ Test saved to: ${filePath}`);
  console.log("🧪 Generated test preview:\n");
  console.log(cleanedTestCode);
}

main().catch((err) => {
  console.error("❌ Failed to generate test:", err);
});
