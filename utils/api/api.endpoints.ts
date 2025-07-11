//This is the root/base URL for all API calls.
//If your backend lives at different URLs (e.g., https://qa.api.example.com), you could replace this with a dynamic value from environment config later.

const BASE_API_URL = "https://practice.expandtesting.com/";
// notes/api/users/register

//You're exporting an object called ApiEndpoints.
//It contains grouped endpoints for different functional areas of your app: users, auth.
export const ApiEndpoints = {
  users: {
    create: `${BASE_API_URL}notes/api/users/register`,
    update: (userId: string) => `${BASE_API_URL}/users/${userId}`,
    delete: (userId: string) => `${BASE_API_URL}/users/${userId}`,
  },
  // login: Usually used to POST credentials and receive a token.
  // logout: Often a POST request to invalidate the token/session.
  auth: {
    login: `${BASE_API_URL}/auth/login`,
    logout: `${BASE_API_URL}/auth/logout`,
  },
};
