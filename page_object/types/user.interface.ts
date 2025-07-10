export interface CreateUser {
  name: string;
  email: string;
  password: string;
  role?: string;
  isActive?: boolean;
}

export interface UpdateCreatedUser {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  isActive?: boolean;
}

// ✅ Add this type if you're loading users.json as a key-value map
export type UserMap = {
  [key: string]: CreateUser;
};
