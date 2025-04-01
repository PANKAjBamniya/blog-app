import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Expire the JWT token by setting an empty cookie
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0), // Expire the cookie immediately
    });

    return response;
  } catch (error) {
    console.error("Logout Error:", error.message);
    return NextResponse.json({ error: "Error logging out" }, { status: 500 });
  }
}
