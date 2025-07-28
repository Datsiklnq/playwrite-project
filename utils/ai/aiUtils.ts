import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Sends a prompt to OpenAI and returns the response text.
 */
export async function getTestData(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.choices[0].message.content ?? "";

    console.log("🔍 OpenAI response received.");
    return result;
  } catch (err) {
    console.error("❌ OpenAI error:", err);
    return "";
  }
}

/**
 * Extracts a random user from JSON string input.
 */
export function extractRandomUser(data: string) {
  try {
    const parsed = JSON.parse(data);
    const users = parsed.users ?? parsed;

    if (!Array.isArray(users) || users.length === 0) {
      throw new Error("No users found");
    }

    const randomIndex = Math.floor(Math.random() * users.length);
    const user = users[randomIndex];

    return {
      firstName: user.first_name ?? "DefaultFirst",
      lastName: user.last_name ?? "DefaultLast",
      email: user.email ?? "default@example.com",
      address: user.address ?? "123 Default St",
      age: user.age ?? 18,
    };
  } catch (error) {
    console.error("⚠️ Failed to extract user:", error);
    return {
      firstName: "DefaultFirst",
      lastName: "DefaultLast",
      email: "default@example.com",
      address: "123 Default St",
      age: 18,
    };
  }
}
