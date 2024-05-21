import React from "react";
import hero_image from "../Bharatintern images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-10 bg-gray-900">
      <div className=" md:flex pt-40 text-white bg-gray-900 ">
        <p className=" pl-10 md:pl-20 md:pb-40 md:pt-40 text-5xl font-bold">
          Unlock your potential with
          <span className="text-blue-400">
            Bharat Intern <br />
          </span>
          <span className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nam vero non, voluptas alias reprehenderit iure repudiandae eaque
            odio eveniet autem saepe! Impedit!
          </span>
        </p>
        <motion.img
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
          src={hero_image}
          alt="main"
          className="ml-10 mt-10 w-3/4 md:ml-20 pb-20 bg-gray-900 mr-20 "
        />
      </div>
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "rgb(0, 228, 220)",
          boxShadow: "0px 0px 8px rgb(0, 128, 120)",
        }}
        transition={{type:'spring', stiffness:500}}
        className=" sm:ml-72 ml-32 md:ml-40 sm:bg-green-400 font-bold text-white bg-green-400 hover:border-green-400 rounded p-3 w-40 hover:bg-purple-500"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Hero;
