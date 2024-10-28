/**
 * Handles PATCH requests to API
 */

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const api_PATCH: (payLoad: {data: string}) => void = async (payLoad) => {
  const response = await fetch(`${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoad),
  });
  return response.json();
};
