export const API_URL = "https://dev-to-backend-dev-sxgk.2.us-1.fl0.io";

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
