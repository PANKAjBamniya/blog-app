import React from "react";

const BlogItem = () => {
  const allBlogs = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/236x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
      title: "Understanding React Hooks",
      description:
        "Learn how React hooks can simplify your component logic and improve performance.",
      author: "John Doe",
      date: "March 28, 2025",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/236x/e4/a4/10/e4a4103c63458a59cbe298ac2b8b9a8b.jpg",
      title: "10 JavaScript Tips for Beginners",
      description:
        "Boost your JavaScript skills with these essential tips and tricks for writing better code.",
      author: "Jane Smith",
      date: "March 25, 2025",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/236x/fe/38/11/fe3811748c41b542853029dd91209821.jpg",
      title: "Why Tailwind CSS is a Game Changer",
      description:
        "Explore the benefits of using Tailwind CSS for rapid UI development and customization.",
      author: "Michael Lee",
      date: "March 20, 2025",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/236x/37/48/a8/3748a8f594ce254c07edc68a279c0079.jpg",
      title: "Getting Started with Node.js",
      description:
        "A beginner-friendly guide to understanding the basics of Node.js and backend development.",
      author: "Sophia Brown",
      date: "March 18, 2025",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/236x/5b/39/fa/5b39fac2f14d0c93d12a32a1222e862f.jpg",
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
            <span className="bg-black text-white px-2 py-[2px] rounded ">
              {" "}
              By {blog.author}{" "}
            </span>
            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{blog.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
