"use client";
import React, { useState } from "react";
import CreateBlog from "./CreateBlog";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const { user } = useAuthStore();
  const [showForm, setShowForm] = useState(false);

  const handleCreateBlog = () => {
    if (!user) {
      toast.error("⚠️ Please login to create a blog!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    setShowForm(true);
  };

  return (
    <div className="max-w-2xl mx-auto text-center p-6 rounded-lg md:py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        Stay Updated with Our Latest Blogs
      </h1>
      <p className="text-gray-600 mb-4">
        Get insights on web development, latest trends, and best coding
        practices. Subscribe now and never miss an update!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <button
          onClick={handleCreateBlog}
          className="relative overflow-hidden border-2 bg-teal-700 border-teal-900 text-white px-6 py-2 rounded-lg transition-all duration-300 group"
        >
          <span className="absolute inset-0 w-0 bg-teal-900 transition-all duration-300 group-hover:w-full right-0"></span>
          <span className="relative z-10 text-white group-hover:text-white">
            Create Blog
          </span>
        </button>

        {!user ? (
          ""
        ) : (
          <>
            <button className="relative overflow-hidden border-2 border-black text-black px-6 py-2 rounded-lg transition-all duration-300 group">
              <span className="absolute inset-0 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 text-black group-hover:text-white">
                My Blog
              </span>
            </button>
          </>
        )}
      </div>

      {/* Modal Popup for Blog Creation */}
      {showForm && <CreateBlog setShowForm={setShowForm} />}
    </div>
  );
};

export default Hero;
