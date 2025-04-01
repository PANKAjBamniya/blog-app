"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/blog.png";
import { CgProfile } from "react-icons/cg";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const { user } = useAuthStore();

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });

    localStorage.removeItem("token");

    setIsAuthenticated(false);

    window.location.href = "/";
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

              {/* Profile Icon */}
              <div>
                <span className="text-3xl cursor-pointer">
                  <CgProfile />
                </span>
              </div>
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
