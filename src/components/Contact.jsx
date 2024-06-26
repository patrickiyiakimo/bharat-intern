import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import contact from "../Bharatintern images/contact-img-71ccec92531e0f5a57feb8c853f743de.png";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-900 pt-20 ">
      <p className=" text-2xl pb-10 text-center  pt-20 text-white font-mono">
        Contact Us
      </p>
      <section className="grid grid-cols-2  text-center text-white font-mono">
        <motion.span
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(225, 225, 225)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gray-700 ml-10 mr-10 p-8 m-10 md:p-20 md:m-20 rounded  ring-2 ring-white ring-opacity-100 hover:bg-gray-500"
        >
          <button className="px-5 py-5 rounded-full bg-gray-600 mr-2">
            <MdOutlineMail className="h-6 w-6" />
          </button>
          <p>Mail Here</p>
          <p  className=""> Email: bharatintern.info@gmail.com</p>
        </motion.span>
        <motion.span
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(225, 225, 225)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gray-700 ml-10 mr-10 m-10 p-8 md:p-20  md:m-20 rounded  ring-2 ring-white ring-opacity-100  hover:bg-gray-500"
        >
          <button className="px-5 py-5 rounded-full bg-gray-600 mr-2">
            <MdOutlineLocationOn className="h-6 w-6" />
          </button>
          <p>Visit Here</p>
          <p> Bhopal, Madhya Pradesh, India</p>
        </motion.span>
      </section>
      <section className="text-center text-white font-mono pt-20">
        <p className="text-2xl pb-5">Get In Touch With Us</p>
        <p className="pb-14 pl-5 pr-5">
          Anything on your mind we will be glad to assist you
        </p>
      </section>
      <section className="md:flex">
        <img src={contact} alt="contact" className="" />
        <div className="pl-3 mb-10 pr-5 md:pl-40">
          <div className="mt-8">
            <input
              type="text"
              className="text-white border bg-transparent border-gray-600 w-96 rounded text-base px-3 py-3 focus:outline-none focus:ring-0 focus:border-green-400"
              placeholder="John Doe"
            />
          </div>
          <div className="mt-8">
            <input
              type="email"
              className="text-white border w-96 bg-transparent border-gray-600 rounded text-base px-3 py-3 focus:outline-none focus:ring-0 focus:border-green-400"
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="mt-8 ">
            <input
              type="text"
              className="text-white border w-96 bg-transparent border-gray-600 text-base rounded px-3 py-3 focus:outline-none focus:ring-0 focus:border-green-400"
              placeholder="Your Subject"
            />
          </div>
          <div className="mt-8 ">
            <textarea
              type="textarea"
              className="text-white py-6 focus:outline-none focus:ring-0 focus:border-green-400 border w-96 bg-transparent border-gray-600 text-base rounded px-3"
              placeholder="Write your message...."
            />
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "rgb(0, 228, 220)",
              boxShadow: "0px 0px 8px rgb(0, 128, 120)",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-36 bg-green-400 text-white px-3 py-3 mt-4 rounded font-semibold hover:bg-green-700"
          >
            Submit
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
