import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-3/4 h-2 bg-gray-700 relative overflow-hidden rounded-md">
        <motion.div
          initial={{ width: "1%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-green-500"
        />
      </div>
    </div>
  );
};

export default Loader;
