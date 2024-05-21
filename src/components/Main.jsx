import React from "react";
import main_image from "../Bharatintern images/service-left-main-pic-ac969d4475c0c5d184cf467d3321d7a2.png";
import { TbBracketsAngle } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="pb-20 md:pt-20 md:pb-20 bg-gray-900 font-mono">
      <p className="text-3xl font-semibold text-white text-center md:text-right md:pr-32 mb-10">
        Get Specialised In These Domains
      </p>
      <p className="text-white pb-5 pl-12 md:text-right md:pr-20">
        At Bharat Intern, we excel in various domains to bring your ideas to
        life.
      </p>
      <p className="text-white pl-12 pb-10 md:pl-12 md:text-right md:pr-96">
        Our skills include:
      </p>
      <div className=" md:grid grid-cols-2">
        <img
          src={main_image}
          alt="programming"
          className="pl-10 pr-12 sm:pl-40 w-4/4"
        />
        <section>
          <motion.p
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className=" ml-32   mt-4 pl-20 md:mt-10 block text-white font-semibold  bg-gray-800  rounded  w-96"
          >
            <button>
              <TbBracketsAngle className=" h-6" />
            </button>
            <p> Web Development Basics</p>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className=" ml-32  mt-4 pl-20 md:mt-4  block text-white font-semibold  bg-gray-500  rounded  w-96"
          >
            <button>
              <TbBracketsAngle className=" h-6" />
            </button>
            <p>Full Stack Web Development</p>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className=" ml-32  mt-4 pl-20 md:mt-4  block text-white font-semibold bg-gray-800  rounded  w-96"
          >
            <button>
              <IoIosPhonePortrait className=" h-6" />
            </button>
            <p>Andriod Development</p>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className=" ml-32  mt-4 pl-20 md:mt-4  block text-white font-semibold bg-gray-500  rounded  w-96"
          >
            <button>
              <TbBracketsAngle className=" h-6" />
            </button>
            <p>Machine Learning </p>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className=" ml-32  mt-4 pl-20 md:pr-10 block
           text-white font-semibold bg-gray-800  rounded  w-96"
          >
            <button>
              <TbBracketsAngle className=" h-6" />
            </button>
            <p>Data Science</p>
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default Main;
