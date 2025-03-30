import React from "react";

const BlogItem = () => {
  const allBlogs = [
    {
      id: 1,
      image: "",
      title: "Understanding React Hooks",
      description:
        "Learn how React hooks can simplify your component logic and improve performance.",
      author: "John Doe",
      date: "March 28, 2025",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x300/?coding,laptop",
      title: "10 JavaScript Tips for Beginners",
      description:
        "Boost your JavaScript skills with these essential tips and tricks for writing better code.",
      author: "Jane Smith",
      date: "March 25, 2025",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x300/?developer,workspace",
      title: "Why Tailwind CSS is a Game Changer",
      description:
        "Explore the benefits of using Tailwind CSS for rapid UI development and customization.",
      author: "Michael Lee",
      date: "March 20, 2025",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x300/?server,cloud",
      title: "Getting Started with Node.js",
      description:
        "A beginner-friendly guide to understanding the basics of Node.js and backend development.",
      author: "Sophia Brown",
      date: "March 18, 2025",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/400x300/?ai,robot",
      title: "The Future of AI in Web Development",
      description:
        "Discover how AI is transforming the way websites and applications are built today.",
      author: "Daniel Wilson",
      date: "March 15, 2025",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {allBlogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{blog.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              <span>
                By {blog.author} | {blog.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
