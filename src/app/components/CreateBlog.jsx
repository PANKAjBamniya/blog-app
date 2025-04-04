"use client";
import React, { useState } from "react";
import useBlogStore from "../store/blogStore";

const CreateBlog = ({ setShowForm }) => {
  const { addBlog } = useBlogStore();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    image: "",
    authorImg: "",
  });

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlog(blogData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50 p-4 sm:p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-4xl"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
          Create a New Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blogData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded "
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={blogData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded md:ml-2 mt-2"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={blogData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="text"
            name="authorImg"
            placeholder="Author Image URL"
            value={blogData.authorImg}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2 md:ml-2"
          />
          <input
            type="text"
            name="image"
            placeholder="Blog Image URL"
            value={blogData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded col-span-1 sm:col-span-2 mt-2"
          />
        </div>

        <textarea
          name="description"
          placeholder="Blog Content"
          value={blogData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-4"
          rows="4"
        ></textarea>

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
          <button
            type="submit"
            className="w-full sm:w-auto bg-teal-700 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
          <button
            onClick={() => setShowForm(false)}
            type="button"
            className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
