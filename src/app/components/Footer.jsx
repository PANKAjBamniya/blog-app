import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Pankaj Bamniya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
