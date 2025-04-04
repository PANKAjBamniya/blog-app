"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/blog.png";
import { CgProfile } from "react-icons/cg";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    
    await logout();
  };

  return (
    <header className="shadow">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Blog Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src={logo} alt="Blog Logo" priority className="w-26" />
        </Link>

        {/*  Authentication Buttons */}
        <div className="flex items-center gap-5">
          {user ? (
            <>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
              >
                LogOut
              </button>

              <span
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)} // ✅ Toggle box
              >
                <CgProfile />
              </span>

              {/* Dropdown Box */}
              {isOpen && user && (
                <div className="absolute right-4 mt-2 w-48 bg-white shadow-xl rounded-lg p-4 top-16">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Login Button */}
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              >
                Login
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
