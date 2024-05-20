import React from "react";
import image_one from "../Bharatintern images/wd-02b6a38300b1e58689d0ee466bd73119.png";
import image_two from "../Bharatintern images/ml-75c4224683a93131a31841c29761e808.png";
import image_three from "../Bharatintern images/ds-52dc057b9c881e2de872abc999eee8c7.png";
import image_four from "../Bharatintern images/ad-84506a6c9d40392c7d743a2a4e4f85e4.png";
import image_five from "../Bharatintern images/fs-e46224840cdf6333df6a3709ad781138.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Apply = () => {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="pt-40 text-center text-2xl  font-semibold font-mono pb-20">
        <p>INTERNSHIPS WE OFFER!</p>
      </div>
      <span className="bg-gray-900  md:grid grid-cols-3 gap-10 md:ml-36">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          className=" overflow-hidden mb-10 ml-20"
        >
          <img src={image_one} alt="html" className="w-3/4 rounded" />
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="bg-white text-gray-600 w-64 font-semibold px-3 py-3 mt-4 ml-30 rounded cursor-pointer hover:bg-green-400 hover:text-white md:w-64"
          >
            <Link to="/signup">Web Development</Link>
            <button className="ml-20">
              <IoArrowForwardCircleSharp className="" />
            </button>
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          className="overflow-hidden mb-10 ml-20"
        >
          <img src={image_two} alt="html" className="w-3/4 rounded" />
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="bg-white text-gray-600 px-3 py-3 mt-4 ml-30 font-semibold rounded cursor-pointer hover:bg-green-400 hover:text-white w-64"
          >
            <Link to="/signup">Machine Learning</Link>
            <button className="ml-20">
              <IoArrowForwardCircleSharp className="" />
            </button>
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          className="overflow-hidden mb-10 ml-20"
        >
          <img src={image_three} alt="html" className="w-3/4 rounded" />
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="bg-white text-gray-600 px-3 py-3 mt-4 ml-30 rounded font-semibold cursor-pointer hover:bg-green-400 hover:text-white w-64"
          >
            <Link to="/signup">Data Science</Link>
            <button className="ml-20">
              <IoArrowForwardCircleSharp className="" />
            </button>
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          className="overflow-hidden mb-10 ml-20"
        >
          <img src={image_four} alt="html" className="w-3/4 rounded" />
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="bg-white text-gray-600 px-3 py-3 mt-4 ml-30 rounded font-semibold cursor-pointer hover:bg-green-400 hover:text-white w-64"
          >
            <Link to="/signup">App Development</Link>
            <button className="ml-20">
              <IoArrowForwardCircleSharp className="" />
            </button>
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          className="overflow-hidden mb-10 ml-20"
        >
          <img src={image_five} alt="html" className="w-3/4 rounded" />
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="bg-white text-gray-600 px-3 py-3 mt-4 mb-20 ml-30 rounded font-semibold cursor-pointer hover:bg-green-400 hover:text-white w-64"
          >
            <Link to="/signup">Full-Stack Web Development</Link>
            <button className="ml-20">
              <IoArrowForwardCircleSharp className="" />
            </button>
          </motion.p>
        </motion.div>
      </span>
      <Footer />
    </div>
  );
};

export default Apply;
