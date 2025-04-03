"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const { register, user, autoLogin } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  useEffect(() => {
    autoLogin();

    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Link
        href="/"
        className="text-white hover:underline ml-1 fixed top-4 right-4 bg-gray-900 px-4 py-2 rounded"
      >
        Back
      </Link>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="John Doe"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="example@email.com"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-500 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link href="/login" className="text-teal-600 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
