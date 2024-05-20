import React from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-7 text-gray-200 bg-gray-600 font-mono pt-10 md:pt-20 pl-10 md:pl-40">
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="font-semibold pb-1 text-xl"
        >
          Find More
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="font-semibold text-xl"
        >
          Follow Us
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="font-semibold pb-2 text-xl"
        >
          Address
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <button>
            <CiLinkedin className="h-4 w-6 " />
          </button>
          LinkedIn
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <button>
            <MdOutlineLocationOn className="h-4 w-6" />
          </button>
          Bhopal, Madhya Pradesh, India
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="font-bold"
        >
          About
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <button>
            <PiTelegramLogoLight className="h-4 w-6" />
          </button>
          Telegram
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <button>
            <MdOutlineMail className="h-4 w-6" />
          </button>
          Email: bharatintern.info@gmail.com
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Contact Us
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <button>
            <CiYoutube className="h-4 w-6" />
          </button>
          YouTube
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "rgb(0, 228, 220)",
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Apply
        </motion.p>
      </div>
      <div className="bg-gray-600 p-10 text-white font-mono">
        <p className="text-center">
          <hr className="pt-5" />
          Copyright © 2024 Bharat Intern. All rights reserved by BharatIntern
        </p>
      </div>
    </div>
  );
};

export default Footer;
