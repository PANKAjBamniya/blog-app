"use client";
import BlogItem from "./components/BlogItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BlogItem />
      <Footer />
      <ToastContainer />
    </>
  );
}
