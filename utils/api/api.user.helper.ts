import {
  CreateUser,
  UpdateCreatedUser,
} from "../../page_object/types/user.interface";

export async function createUser(payload: CreateUser) {
  const respons = await fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return respons;
}

export async function updateUser(userId: string, payload: UpdateCreatedUser) {
  const response = await fetch(`/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response;
}
