import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { PiTreeStructureThin } from "react-icons/pi";

const Section = () => {
  return (
    <div className="flex p-10 mr-10 ml-20 ">
      <div className="p-10 border-dotted border-green-400 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
        <button className="px-5 py-5 rounded-full bg-green-300">
          <FaBarsProgress className="text-green-700 " />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-blue-900  pb-5">
          Simplified Internships
        </p>
        <p className=" text-blue-900">
          Explore virtual internships in web Dev, App Dev, Full Stack, ML, and
          Data Science; focused learning
        </p>
      </div>

      <div className=" p-10 border-dotted border-pink-400 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
        <button className="px-5 py-5 rounded-full bg-pink-300">
          <TbBracketsAngle className="" />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-blue-900 mr-10 pb-5">
          Build Your Network
        </p>
        <p className=" text-blue-900 ">
          We believe in networking to connect with other interns who are
          interested in the same thing
        </p>
      </div>
      <div className=" p-10 border-dotted border-indigo-400 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
        <button className="px-5 py-5 rounded-full bg-indigo-300">
          <IoMdContacts className="" />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-blue-900 mr-10 pb-5">
          Building Student Trust
        </p>
        <p className=" text-blue-900">
          Trust We ensures your success and building a trusted platform for
          valuable learning experiences
        </p>
      </div>
      <div className="p-10 border-dotted border-orange-300 rounded hover:text-white border-2 mr-10 hover:bg-green-300 ">
        <button className="px-5 py-5 rounded-full bg-orange-300">
          <PiTreeStructureThin />
        </button>
        <p className="font-semibold pt-5 hover:cursor-pointer text-lg text-blue-900 mr-10 pb-5">
          Structured Learning
        </p>
        <p className=" text-blue-900">
          Enjoy growth-oriented internship at Bharat Intern, tailored for
          maximum skill development.
        </p>
      </div>
    </div>
  );
};

export default Section;
