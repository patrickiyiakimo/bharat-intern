import React from "react";
import Bharat_logo from "../Bharatintern images/download.png";

const Navbar = () => {
  return (
    <div className="flex font-semibold bg-white text-blue-900 space-x-10 px-20 pt-5 pb-5 space-x-6 sticky top-0 z-10 w-full">
      <img src={Bharat_logo} alt="Bharat logo" className="w-28 mr-96" />
      <p className="">Home</p>
      <p className="">Verify</p>
      <p className="">About</p>
      <p className="">Contact</p>
      <button className=" border-dashed border-2 border-green-400 bg-transparent text-black py-2 rounded w-28 hover:bg-green-400 hover:text-white ">
        Apply
      </button>
    </div>
  );
};

export default Navbar;
