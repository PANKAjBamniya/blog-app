import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// JWT Secret Key from .env file
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
      return NextResponse.json(
        { error: "Authorization token is required" },
        { status: 401 }
      );
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return NextResponse.json(
          { error: "Invalid or expired token" },
          { status: 401 }
        );
      }

      // If token is valid, you can access the decoded user info
      return NextResponse.json(
        { message: "Protected content", user: decoded },
        { status: 200 }
      );
    });
  } catch (error) {
    console.error("Protected Route Error:", error.message);
    return NextResponse.json(
      { error: "Error accessing protected route" },
      { status: 500 }
    );
  }
}
