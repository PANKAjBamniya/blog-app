"use client";
import React, { useEffect } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {};

  useEffect(() => {}, []);
  return <div>{params.id}</div>;
};

export default page;
