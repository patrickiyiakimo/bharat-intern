import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { PiTreeStructureThin } from "react-icons/pi";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <div className=" md:flex p-3 pt-10  font-mono bg-gray-900">
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(0, 128, 120)",
        }}
        transition={{ type: "spring", stiffness: 500 }}
        className="mb-10 ml-10 md:ml-10 p-6 md:p-10 border-dotted border-green-100 rounde border-2 mr-10 hover:bg-green-700 hover:text-gray-600"
      >
        <button className="px-5 py-5 rounded-full bg-green-900">
          <FaBarsProgress className="text-green-200 " />
        </button>
        <p className="font-semibold pt-5  hover:cursor-pointer text-lg text-white  pb-5">
          Simplified Internships
        </p>
        <p className=" text-white">
          Explore virtual internships in web Dev, App Dev, Full Stack, ML, and
          Data Science; focused learning
        </p>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(0, 128, 120)",
        }}
        transition={{ type: "spring", stiffness: 500 }}
        className="mb-10 ml-10 md:ml-10 p-6 md:p-10 border-dotted border-pink-100 rounded hover:text-white border-2 mr-10 hover:bg-pink-500 "
      >
        <button className="px-5 py-5 rounded-full bg-pink-300">
          <TbBracketsAngle className="" />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-white pb-5">
          Build Your Network
        </p>
        <p className=" text-white ">
          We believe in networking to connect with other interns who are
          interested in the same thing
        </p>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(0, 128, 120)",
        }}
        transition={{ type: "spring", stiffness: 500 }}
        className="mb-10 ml-10 md:ml-10 p-6 md:p-10 border-dotted border-indigo-100 rounded hover:text-white border-2 mr-10 hover:bg-indigo-700 "
      >
        <button className="px-5 py-5 rounded-full bg-indigo-300">
          <IoMdContacts className="" />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-white  pb-5">
          Building Student Trust
        </p>
        <p className=" text-white">
          Trust We ensures your success and building a trusted platform for
          valuable learning experiences
        </p>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(0, 128, 120)",
        }}
        transition={{ type: "spring", stiffness: 500 }}
        className="mb-10 ml-10 md:ml-10 p-6 md:p-10 border-dotted border-orange-100 rounded hover:text-white border-2 mr-10 hover:bg-orange-700 "
      >
        <button className="px-5 py-5 rounded-full bg-orange-300">
          <PiTreeStructureThin />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-white  pb-5">
          Structured Learning
        </p>
        <p className=" text-white">
          Enjoy growth-oriented internship at Bharat Intern, tailored for
          maximum skill development.
        </p>
      </motion.div>
    </div>
  );
};

export default Section;
