export const API_URL = "https://dev-to-backend-dev-sxgk.2.us-1.fl0.io";

export const loginRequest = async (userData) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();

  return data;
};


export const registerRequest = async (userData) => {
  const response = await fetch(`${API_URL}/users/`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};


export const postById = async (id) => {
  const resp = await fetch(`${API_URL}/posts/${id}`)
  const data = await resp.json()
  return data
}