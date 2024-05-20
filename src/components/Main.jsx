import React from "react";
import main_image from "../Bharatintern images/service-left-main-pic-ac969d4475c0c5d184cf467d3321d7a2.png";
import { TbBracketsAngle } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";

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
      <p className="text-white pl-12 pb-10 md:pl-12 md:text-right md:pr-96">Our skills include:</p>
      <div className="md:flex">
        <img src={main_image} alt="programming" className="pl-10 pr-12 " />
        <button className="hover:bg-green-700 ml-32 md:ml-1 cursor-default mt-10 pt-5 md:mt-10 md:pt-5 text-white font-bold  bg-gray-800  rounded p-3 w-40">
          <p>
            <TbBracketsAngle className="w-32 h-10" />
            Web Development Basics
          </p>
        </button>
        <button className="hover:bg-green-700 ml-32 cursor-default mt-10 pt-5 md:mt-10 md:pt-5 block text-white font-bold  bg-gray-500  rounded p-3 w-40">
          <TbBracketsAngle className="w-32 h-10" />
          <p>Full Stack Web Development</p>
        </button>
        <button className="hover:bg-green-700 ml-32 cursor-default mt-10 pt-5 md:mt-10 md:pt-5 block text-white font-bold bg-gray-800  rounded p-3 w-40">
          <IoIosPhonePortrait className="w-32 h-10" />
          <p>Andriod Development</p>
        </button>
        <button className="hover:bg-green-700 ml-32 cursor-default mt-10 pt-5 md:mt-10 md:pt-5 block text-white font-bold bg-gray-500  rounded p-3 w-40">
          <TbBracketsAngle className="w-32 h-10" />
          <p>Machine Learning </p>
        </button>
        <button className="hover:bg-green-700 ml-32 cursor-default mt-10 pt-5 md:mt-10 md:pr-10 pt-5 text-white font-bold bg-gray-800  rounded p-3 w-40">
          <TbBracketsAngle className="w-32 h-10" />
          <p>Data Science</p>
        </button>
      </div>
    </div>
  );
};

export default Main;
