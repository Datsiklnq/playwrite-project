import fs from "fs";
import path from "path";
import { UserMap } from "../page_object/types/user.interface";

export function loadUsers(): UserMap {
  const filePath = path.resolve(__dirname, "./data/user/users.json");
  const file = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(file) as UserMap;
}
