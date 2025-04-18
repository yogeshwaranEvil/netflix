const API_BASE = "http://localhost:8000/auth";

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export const register = async (email: string, password: string): Promise<any> => {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Registration failed");
  return await res.json();
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  console.log("Login response:", data); // Debug: Log the response
  localStorage.setItem("token", data.access_token);
  console.log("Token saved:", localStorage.getItem("token")); // Debug: Confirm token is saved
  return data;
};

export const getMe = async (): Promise<{ email: string }> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const res = await fetch(`${API_BASE}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Unauthorized: Invalid or expired token");
      }
      throw new Error(`Failed to fetch user data: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("getMe error:", error);
    throw error; // Let the caller handle the error
  }
};
