import React from "react";
import image1 from "../image/image1.png";

const Navbar = () => {
  return (
    <header className="sticky-header fixed top-0 w-full h-[64px] gap-4 bg-accent-5 text-white flex items-center justify-center z-50">
      <h1 className="text-2xl w-full text-center font-bold pl-5">
        Select a Connector
      </h1>
      <img className="h-6 w-[10%] mr-4" src={image1} alt="logo" />
    </header>
  );
};

export default Navbar;
