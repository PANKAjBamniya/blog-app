import { create } from "zustand";

// Define Zustand store
export const useAuthStore = create((set) => ({
  user: 33, // Initial state
}));
