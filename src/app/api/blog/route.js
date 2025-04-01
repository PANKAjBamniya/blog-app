import BlogModel from "../../../../lib/model/blogModel";
import { connectDB } from "../../../../lib/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogModel.find();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { title, description, category, author, image, authorImg } =
      await request.json();

    if (
      !title ||
      !description ||
      !category ||
      !author ||
      !image ||
      !authorImg
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newBlog = new BlogModel({
      title,
      description,
      category,
      author,
      image,
      authorImg,
    });
    await newBlog.save();

    return NextResponse.json({
      message: "Blog added successfully",
      blog: newBlog,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error adding blog" }, { status: 500 });
  }
}
