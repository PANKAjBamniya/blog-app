import React from "react";

const Hero = () => {
    

  return (
    <div className="max-w-2xl mx-auto text-center p-6 rounded-lg pb-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        Stay Updated with Our Latest Blogs
      </h1>
      <p className="text-gray-600 mb-4">
        Get insights on web development, latest trends, and best coding
        practices. Subscribe now and never miss an update!
      </p>
      <form className="flex flex-col sm:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your Email"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-teal-900 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Hero;
