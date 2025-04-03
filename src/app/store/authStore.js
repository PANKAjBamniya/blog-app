import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
  error: null,
  loading: false, // Add a loading state

  // Register Function
  register: async (formData) => {
    set({ loading: true }); // Set loading to true before making the request
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        set({
          user: data.user,
          token: data.token,
          error: null,
          loading: false,
        });
      } else {
        set({ error: data.error, loading: false });
        console.error("Register Error:", data.error);
      }
    } catch (error) {
      set({ error: "Error in register process", loading: false });
      console.error("Error in register:", error);
    }
  },

  // Login Function
  login: async (formData) => {
    set({ loading: true }); // Set loading to true before making the request
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        set({
          user: data.user,
          token: data.token,
          error: null,
          loading: false,
        });
      } else {
        set({ error: data.error, loading: false });
        console.error("Login Error:", data.error);
      }
    } catch (error) {
      set({ error: "Error in login process", loading: false });
      console.error("Error in login:", error);
    }
  },

  // Logout Function
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, error: null, loading: false });
  },

  // Auto Login Function
  autoLogin: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ loading: true }); // Set loading to true before fetching user
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (data.user) {
          set({ user: data.user, token, loading: false });
        } else {
          set({ error: "User not found, please login again.", loading: false });
          localStorage.removeItem("token");
        }
      } catch (error) {
        set({ error: "Session expired, please login again.", loading: false });
        localStorage.removeItem("token");
      }
    }
  },
}));
