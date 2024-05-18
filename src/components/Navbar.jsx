import React from "react";
import Bharat_logo from "../Bharatintern images/download.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="flex pl-60 shadow-lg fixed font-semibold bg-gray-900 text-white space-x-10 px-20 pt-5 pb-5   top-0 z-10 w-full">
        <img src={Bharat_logo} alt="Bharat logo" className="w-28 mr-96" />
        <p className="mt-3 hover:text-green-300 cursor-pointer">Home</p>
        <p className="mt-3 hover:text-green-300 cursor-pointer">
          <Link to="/about">About</Link>
        </p>
        <p className="mt-3 hover:text-green-300 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </p>
        <button className=" border-dashed border-2 border-green-200 bg-transparent text-white py-2 rounded w-28 hover:bg-green-400 hover:text-white ">
          <Link to="/apply"> Apply</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;


