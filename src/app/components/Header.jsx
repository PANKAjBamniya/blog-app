import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../assets/blog.png";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src={logo} alt="Blog Logo" priority className="w-26" />
        </Link>

        <Link
          href="#"
          className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-500 transition"
        >
          Get Started
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
