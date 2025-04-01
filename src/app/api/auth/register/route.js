import UserModel from "../../../../../lib/model/userModel";
import { connectDB } from "../../../../../lib/config/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    // ✅ Validate input (trim to remove unwanted spaces)
    if (!name.trim() || !email.trim() || !password.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = new UserModel({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { name: newUser.name, email: newUser.email }, // 🔹 Remove password
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error.message);
    return NextResponse.json(
      { error: "Error registering user" },
      { status: 500 }
    );
  }
}
