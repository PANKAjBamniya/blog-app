import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  //  Register Function
  register: async (formData) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        set({ user: data.user, token: data.token });
      } else {
        console.error("Register Error:", data.error);
      }
    } catch (error) {
      console.error("Error in register:", error);
    }
  },

  //  Login Function
  login: async (formData) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        set({ user: data.user, token: data.token });
      } else {
        console.error("Login Error:", data.error);
      }
    } catch (error) {
      console.error("Error in login:", error);
    }
  },

  //  Logout Function
  logout: () => set({ user: null, token: null }),
}));
