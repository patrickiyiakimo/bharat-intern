import React from "react";
import { IoMdContact } from "react-icons/io";
import image_one from "../Bharatintern images/wd-02b6a38300b1e58689d0ee466bd73119.png";
import Footer from "./Footer";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="bg-gray-900 font-mono">
      <div>
        <p className="text-center pb-10 pt-40 text-white font-semibold text-2xl">
          Virtual Internship Program
        </p>
        <div className="flex text-grey-400 justify-center mb-10 bg-gray-900">
          <div className="ml-10 mr-10 md:mr-80 md:ml-80 p-6 shagow-lg bg-white rounded-md">
            <h1 className="text-3xl text-gray-900 text-center block font-semibold pb-10">
              <IoMdContact className="text-gray-900" />
              Student Details
            </h1>
            <p className="text-red-500">
              Note: Please don't apply many times for the same domain, or your
              application will be consider as invalid.
            </p>
            <hr className="mt-3" />
            <div className="mt-3">
              <label for="email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
                className="border w-full text-base px-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="mt-3">
              <label for="name" className="block text-base mb-2">
                Name
              </label>
              <input
                type="name"
                className="border w-full text-base px-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="mt-3 ">
              <label for="name" className="block text-base mb-2">
                Contact Name
              </label>
              <input
                type="text"
                className="border w-full text-base px-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-1">Year</label>
              <input type="radio" className="" />
              <label className="ml-3">1st Year</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">2nd Year</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">3rd Year</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">4th Year</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">Passed Out</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">Others...</label> <br />
            </div>
            <div className="mt-3">
              <label for="name" className="block text-base mb-2">
                College Branch
              </label>
              <input
                type="name"
                className="border w-full text-base px-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="mt-3">
              <label for="name" className="block text-base mb-2">
                College Name
              </label>
              <input
                type="name"
                className="border w-full text-base px-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="mt-3 ">
              <label className="block text-base mb-1">
                Domain Of Internship
              </label>
              <input type="radio" className="" />
              <label className="ml-3">Web Development Basics</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">Fullstack Web Development</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">App Development</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">Machine Learning</label> <br />
              <input type="radio" className="" />
              <label className="ml-3">Data Science</label> <br />
            </div>
            <p className="mt-12">
              I have joined the telegram group ( mandatory for internship
              updates and project information )
            </p>
            <input type="radio" className="" />
            <label className="ml-3">Yes</label> <br />
            <p className="mt-12 font-semibold text-green-400 text-xl">
              Sample Certificate Of Completion
            </p>
            <img src={image_one} alt="html" className="w-2/4 " />
            <div className="mt-5">
              <button
                type="submit"
                className="mb-5 mt-5 border-2 border-green-400 bg-green-400 text-white py-3  rounded w-full hover:bg-green-600 hover:border-2 hover:text-white-900 font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
