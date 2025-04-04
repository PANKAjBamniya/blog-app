"use client";
import React, { useEffect } from "react";
import useBlogStore from "../store/blogStore";
import Loader from "./Loader";

const BlogItem = () => {
  const { blogs, fetchBlogs, loading } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {loading ? (
        <>
          <div className="">
            <div className="text-center">
              <h1 className="text-xl">Loading...</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <span className="bg-black text-white px-2 py-[2px] rounded ">
                  {" "}
                  By {blog.author}{" "}
                </span>
                <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm">{blog.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogItem;
