export interface TestMetaEntry {
  name: string;
  description: string;
  tags: string[];
  message?: {
    expectedMessage?: string;
  };
}

export type TestDataMap = {
  [testCaseId: number]: TestMetaEntry;
};
