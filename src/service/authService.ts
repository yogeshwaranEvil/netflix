const API_BASE = "https://my-app.yogeshwaran-r2022lcse.workers.dev/auth";

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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Registration failed: ${errorText}`);
  }

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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Login failed: ${errorText}`);
  }

  const data = await res.json();
  localStorage.setItem("token", data.access_token);
  return data;
};

export const getMe = async (): Promise<{ email: string }> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No authentication token found");

  const res = await fetch(`${API_BASE}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    if (res.status === 401) throw new Error("Unauthorized: Invalid or expired token");
    const errorText = await res.text();
    throw new Error(`Failed to fetch user data: ${errorText}`);
  }

  return await res.json();
};
