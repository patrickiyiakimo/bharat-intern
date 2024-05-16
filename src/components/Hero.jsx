import React from "react";
import hero_image from "../Bharatintern images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png";

const Hero = () => {
  return (
    <div className="mb-10">
      <div className="flex mt-20 text-blue-900">
        <p className="pl-40 pt-40 text-5xl ">
          Unlocking your potential with{" "}
          <span className="font-bold">Bharat Intern</span> <br />
          <span className="text-sm font-semibold text-blue-900">
            Our goal is to empower the next generation of tech leaders. Our
            internship program offers hands-on experience in different fields.
          </span>
        </p>
        <img src={hero_image} alt="main" className="ml-40 mr-20 w-1/2" />
      </div>
      <button className="ml-40 font-bold text-white bg-green-400  rounded p-3 w-40 hover:bg-purple-500">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
