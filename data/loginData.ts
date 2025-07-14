// utils/testMeta.ts
import { TestDataMap } from "../page_object/types/test-meta.type";

export const testData: TestDataMap = {
  12345: {
    name: "Valid Login Test",
    description: "Should login successfully with valid credentials.",
    tags: ["@smoke", "@login", "@regression"],
  },
  12346: {
    name: "Invalid Login Password Test",
    description: "Should show error message with invalid password.",
    tags: ["@negative", "@login", "@regression"],
    message: {
      expectedMessage: "Incorrect email address or password",
    },
  },
  12347: {
    name: "Invalid Login Email Test",
    description: "Should show error message with invalid email.",
    tags: ["@negative", "@login", "@regression"],
    message: {
      expectedMessage: "Incorrect email address or password",
    },
  },
};
