// utils/testMeta.ts
import { TestDataMap } from "../page_object/types/test-meta.type";

export const testData: TestDataMap = {
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
      expectedMessage: "Incorrect email address or password",
    },
  },
};
