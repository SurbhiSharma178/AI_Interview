import axios from "axios";

const backendUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const publicApiClient = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
});

const authenticatedApiClient = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
});

export const publicApi = {
  auth: {
    google: (user) => publicApiClient.post("/auth/google", user),
    logout: () => publicApiClient.get("/auth/logout"),
  },
};

export const authenticatedApi = {
  user: {
    getProfile: () => authenticatedApiClient.get("/user/profile"),
  },
};

export const logout = async () => {
  try {
    await publicApi.auth.logout();
  } catch (error) {
    console.error("Logout failed:", error);
  }
}