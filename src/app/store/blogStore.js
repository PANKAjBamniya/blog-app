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

  addBlog: async (blogData) => {
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) throw new Error("Failed to add blog");

      const savedBlog = await response.json();

      set((state) => ({
        blogs: [...state.blogs, savedBlog.blog],
      }));
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  },
}));

export default useBlogStore;
