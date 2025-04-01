import UserModel from "../../../../../lib/model/userModel";
import { connectDB } from "../../../../../lib/config/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// JWT Secret Key from .env file
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    //  Validate input (ensure no empty fields)
    if (!email.trim() || !password.trim()) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    //  Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    //  Compare password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // User authenticated successfully
    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return NextResponse.json(
      {
        message: "Login successful",
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error.message);
    return NextResponse.json(
      { error: "Error logging in user" },
      { status: 500 }
    );
  }
}
