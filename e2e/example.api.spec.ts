import { test, expect } from "@playwright/test";
import { createUser, updateUser } from "../utils/api/api.user.helper";
import { loadUsers } from "../utils/load-user";

test("End-to-end flow: create user and add item", async () => {
  const users = loadUsers();
  const user = users["standard_user"];

  const createRes = await createUser(user);
  expect(createRes.status).toBe(201);

  const createdUser = await createRes.json();
  const userId = createdUser.id;

  const updateRes = await updateUser(userId, { isActive: false });
  expect(updateRes.status).toBe(200);
});
