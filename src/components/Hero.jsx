import React from "react";
import hero_image from "../Bharatintern images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png";

const Hero = () => {
  return (
    <div className="pb-28">
      <div className="flex pt-40 text-white bg-gray-900 font-mono">
        <p className="pl-20 pt-40 text-6xl ">
          Unlock your potential with 
           <span className="font-bold"> Bharat Intern</span> <br />
          <span className="text-xl font-semibold text-white ">
            Our goal is to empower the next generation of tech leaders. Our
            internship program offers hands-on experience in different fields.
          </span>
        </p>
        <img src={hero_image} alt="main" className="ml-40 pb-40 mr-20 w-1/2" />
      </div>
      <button className="ml-40 font-bold text-white bg-green-400 hover:border-green-400 rounded p-3 w-40 hover:bg-purple-500">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
