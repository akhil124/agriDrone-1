import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="flex py-6 bg-[#1A3447]">
      <div className="flex-1"></div>
      <div className="flex-1 text-white font-light flex justify-center items-center gap-20 text-center">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Profile</p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <HiOutlineSearch className="text-[#929EAF] hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
