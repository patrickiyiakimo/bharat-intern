import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";

const OurFeatures = () => {
  return (
    <div>
      <div className="bg-gray-900 font-mono text-white ">
        <p className="text-3xl font-semibold text-white text-center pb-5">
          Our Features
        </p>
        <p className="text-center pb-10">
          These are just some of the our features. By providing these features,
          <br />
          We can make a valuable resource for students looking for internships.
        </p>
      </div>
      <div className="bg-gray-900  text-white md:grid grid-cols-2 gap-10 pb-20">
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(0, 128, 120)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="ml-10 bg-gray-800 mb-10 mr-10 p-5 md:p-10 border-dotted border-2 border-green-400 rounded"
        >
          <p className="font-semibold  text-2xl font-mono">
            <button className="px-3 py-3 md:px-5 md:py-5 rounded-full bg-green-400 mr-2">
              <IoSettingsOutline />
            </button>
            Email Notifications
          </p>
          <p className="text-white  font-mono">
            The email notifications about important events, such as upcoming
            deadlines, new assignments, and changes to your schedule.
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(0, 128, 120)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="md:mr-10 bg-gray-800 mb-10 ml-10 mr-10 p-5 md:p-10 rounded  border-dotted border-2 border-blue-400"
        >
          <p className="font-semibold text-2xl font-mono">
            <button className="px-3 py-3 md:px-5 md:py-5  rounded-full bg-blue-400 mr-2">
              <MdOutlineMailOutline />
            </button>
            Simple Interface
          </p>
          <p className="text-white font-mono">
            The simplicity of the interface makes it easy to use and navigate.
            The information is presented in a clear and concise way.
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(0, 128, 120)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="ml-10 bg-gray-800 mb-10 mr-10 p-5 md:p-10 rounded  border-dotted border-2 border-pink-400"
        >
          <p className="font-semibold text-2xl font-mono">
            <button className="px-3 py-3 md:px-5 md:py-5  rounded-full bg-pink-400 mr-2">
              <IoCubeOutline />
            </button>
            Large Community
          </p>
          <p className="text-white font-mono">
            We believe in networking to connect with other interns who are
            interested in the same things.
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(0, 128, 120)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="md:mr-10 bg-gray-800 mb-10 ml-10 mr-10 p-5 md:p-10 rounded  border-dotted border-2 border-orange-400"
        >
          <p className="font-semibold text-2xl font-mono">
            <button className="px-3 py-3 md:px-5 md:py-5 rounded-full bg-orange-400 mr-2">
              <MdErrorOutline />
            </button>
            Deadline Reminders
          </p>
          <p className="text-white font-mono">
            The reminders are sent to you in advance in our telegram channel and
            your email, so you have plenty of time to get your tasks done.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurFeatures;
