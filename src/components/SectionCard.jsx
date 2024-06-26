import React from 'react'
import Image_one from "../Bharatintern images/mca-58d61c8f815a1b3a6d034a2de52a7047.png";
import Image_two from "../Bharatintern images/aicteLogo-04a2096d319b8f848279a6c47d84b713 (1).png"
import Image_three from "../Bharatintern images/msme-d17b99243eac2e92ec9654fbe3c61565.png";
import { motion } from "framer-motion";

const SectionCard = () => {
  return (
    <div className=" md:grid grid-cols-3 pl-40 md:pb-20 pb-10 md:pt-20 bg-gray-900">
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white md:w-28  mr-28 md:pb-1 p-5 mb-5 rounded-lg md:rounded-md "
      >
        <img src={Image_one} alt="one" className="pb-10 md:w-28 mr-36 " />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white md:w-28  mr-28 md:pb-1 p-5 mb-5 rounded-lg md:rounded-md "
      >
        <img src={Image_two} alt="two" className="pb-10 md:w-28 mr-36" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white md:w-28  mr-28 md:pb-1 p-5 mb-5 rounded-lg md:rounded-md "
      >
        <img src={Image_three} alt="three" className="pb-10 md:w-28 mr-36" />
      </motion.div>
    </div>
  );
}

export default SectionCard;