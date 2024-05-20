import React from "react";
import Bharat_logo from "../Bharatintern images/download.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isSetMenu, setIsSetMenu] = React.useState(false);

  return (
    <div className="sticky top-0 z-10 w-full">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex pl-60 shadow-lg fixed font-semibold bg-gray-900 text-white space-x-10 px-20 pt-5 pb-5   top-0 z-10 w-full"
      >
        {isSetMenu ? (
          <FaTimes className="text-3xl text-red-500 ml-96 absolute mt-6  " />
        ) : (
          <FiMenu className="mt-6 text-3xl ml-96 absolute   " />
        )}

        <img src={Bharat_logo} alt="Bharat logo" className="w-28 mr-96" />
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 500 }}
          className="mt-3  cursor-pointer"
        >
          Home
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 500 }}
          className="mt-3  cursor-pointer"
        >
          <Link to="/aboutus">About</Link>
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 500 }}
          className="mt-3  cursor-pointer"
        >
          <Link to="/contact">Contact</Link>
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.2,
            originX: 0,
          }}
          transition={{ type: "spring", stiffness: 500 }}
          className=" border-dashed border-2 border-green-200 bg-transparent text-white py-2 rounded w-28 hover:bg-green-400 hover:text-white "
        >
          <Link to="/apply"> Apply</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Navbar;
