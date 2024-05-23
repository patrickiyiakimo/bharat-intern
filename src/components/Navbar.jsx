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
        className="md:flex md:pl-60 md:justify-between shadow-lg fixed font-semibold bg-gray-900 text-white space-x-10 px-5 md:px-20 pt-5 pb-5 top-0 z-10 w-full"
      >
        <button className="md:hidden" onClick={() => setIsSetMenu(!isSetMenu)}>
          {isSetMenu ? (
            <FaTimes className="text-3xl text-red-500 mt-2 absolute ml-80" />
          ) : (
            <FiMenu className="mt-2 text-3xl absolute ml-80" />
          )}
        </button>

       
        <img src={Bharat_logo} alt="Bharat logo" className="w-28 mr-96" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <motion.p
            whileHover={{
              scale: 1.3,
              originX: 0,
              color: "rgb(0, 228, 220)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="md:mt-3 mt-10 cursor-pointer"
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
            className="md:mt-3 mt-10 cursor-pointer"
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
            className="md:mt-3 mt-10 cursor-pointer"
          >
            <Link to="/contact">Contact</Link>
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.2,
              originX: 0,
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="mt-10 md:mt-1 border-dashed border-2 border-green-200 bg-transparent text-white py-2 rounded w-28 hover:bg-green-400 hover:text-white"
          >
            <Link to="/apply"> Apply</Link>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isSetMenu && (
          <div className="md:hidden flex flex-col items-center space-y-5 mt-5">
            <motion.p
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "rgb(0, 228, 220)",
              }}
              transition={{ type: "spring", stiffness: 500 }}
              className="cursor-pointer"
              onClick={() => setIsSetMenu(false)}
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
              className="cursor-pointer"
              onClick={() => setIsSetMenu(false)}
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
              className="cursor-pointer"
              onClick={() => setIsSetMenu(false)}
            >
              <Link to="/contact">Contact</Link>
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 500 }}
              className="border-dashed border-2 border-green-200 bg-transparent text-white py-2 rounded w-28 hover:bg-green-400 hover:text-white"
              onClick={() => setIsSetMenu(false)}
            >
              <Link to="/apply"> Apply</Link>
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
