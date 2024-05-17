import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { PiTreeStructureThin } from "react-icons/pi";


const Section = () => {
  return (
    <div className="flex p-3 pt-20 font-mono bg-gray-900">
      <div className="p-10 border-dotted border-green-100 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
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
      </div>

      <div className=" p-10 border-dotted border-pink-100 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
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
      </div>
      <div className=" p-10 border-dotted border-indigo-100 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
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
      </div>
      <div className="p-10 border-dotted border-orange-100 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
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
      </div>
    </div>
  );
};

export default Section;
