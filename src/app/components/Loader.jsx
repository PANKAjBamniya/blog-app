import React from "react";
import Image from "next/image";
import loader from "../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
      <Image src={loader} alt="Blog Logo" priority className="" />
    </div>
  );
};

export default Loader;
