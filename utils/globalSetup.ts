import { EnvirData } from "./env/env.data";

globalThis.environmentVariables = () => new EnvirData();

// 🔥 This is what Playwright is expecting
export default async () => {
  (global as any).environmentVariables = environmentVariables;
};
