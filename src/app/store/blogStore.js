import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],
  loading: false,

  fetchBlogs: async () => {
    set({ loading: true });
    try {
      const response = await fetch("api/blog");
      const data = await response.json();
      set({ blogs: data, loading: false });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      set({ loading: false });
    }
  },
}));

export default useBlogStore;
