import React from 'react'
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-white ml-5 mb-5 mr-5 md:ml-20 p-10 bg-gray-800 rounded "
    >
      <span className="font-semibold text-xl font-mono">
        Connects students with internships:
      </span>
      <p className="font-mono">
        Bharat Intern connects students with internships in a variety of fields.
        This gives students the opportunity to gain experience, skills, and a
        network.
      </p>
      <br />
      <span className="font-semibold text-xl font-mono">
        Gives students experience, skills, and a network:
      </span>
      <p className="font-mono">
        Internships can give students valuable experience in their field. They
        can also help students develop new skills and build a network of
        contacts.
      </p>
      <br />
      <span className="font-semibold text-xl font-mono">
        Is a great way to start your career:
      </span>
      <p className="font-mono">
        Internships can be a great way to start your career. They can help you
        gain experience, skills, and a network that can help you land your first
        job
      </p>
    </motion.div>
  );
}

export default AboutText