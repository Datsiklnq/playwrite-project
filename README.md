🎭 Playwright Test Automation with AI Integration
This project is a modern end-to-end testing framework built with Playwright and enhanced by OpenAI-powered test generation.

🔍 Key Features
✅ Playwright Framework using TypeScript

🧠 AI Test Generator – Generate Playwright tests from natural language prompts using OpenAI

📁 Page Object Model (POM) architecture for clean, reusable code

📂 Organized folder structure for tests, pages, and utils

🧪 Real-time test generation and execution from the terminal

🛠️ Built-in utilities to extract mock test data from AI (e.g., user info)

📦 Ready for CI/CD pipeline integration

🤖 How AI is Used
Using the getTestData utility, testers can input a test scenario prompt (e.g., "Login with valid and invalid credentials"), and the project will:

Call OpenAI to generate the corresponding Playwright test

Save the test under the tests/ai/ folder

Run the test just like any other Playwright spec

📌 Example Prompts
"Generate a test for user registration with invalid email"

"Test checkout process with promo code"

🧱 Tech Stack
Playwright (Testing framework)

TypeScript

OpenAI API

Node.js

dotenv for managing secrets

🚀 Getting Started
Clone the repo
git clone https://github.com/Datsiklnq/playwrite-project

Install dependencies
npm install

Set your OpenAI key in .env

ini
Copy
Edit
OPENAI_API_KEY=your_api_key_here
Run the AI generator
npm run generate:test

