/**
 * Handles GET requests to API
 */

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const api_FETCH: (access: string) => Promise<string> = async (access) => {
  const response = await fetch(`${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  });
  const data = await response.json();
  return data;
};
