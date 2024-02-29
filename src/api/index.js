export const API_URL = "https://dev-to-backend-dev-sxgk.2.us-1.fl0.io";



export const loginRequest = async (userData) => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = response.json()

    return data
}
