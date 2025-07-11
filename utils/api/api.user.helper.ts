import { CreateUser } from "../../page_object/types/user.interface";
import { ApiEndpoints } from "./api.endpoints";

export async function createUser(payload: CreateUser) {
  const respons = await fetch(ApiEndpoints.users.create, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return respons;
}

export async function updateUser(userId: string, data: any) {
  const response = await fetch(ApiEndpoints.users.update(userId), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}

export function generateUser(): CreateUser {
  const timestamp = Date.now();
  return {
    name: `TestUser_${timestamp}`,
    email: `testuser+${timestamp}@example.com`,
    password: `Test1234!`,
  };
}
