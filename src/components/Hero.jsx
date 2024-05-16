import React from "react";
import hero_image from "../Bharatintern images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png";

const Hero = () => {
  return (
    <div className="flex mt-20">
      <p className="ml-20 mt-40 text-6xl">
        Unlocking your potential with <span>'Bharat Intern' </span> <br />
        <span>
          Our goal is to empower the next generation of tech leaders. Our
          internship program offers hands-on experience in different fields.
        </span>
      </p>
      <img src={hero_image} alt="main" className="ml-40 mr-20" />
    </div>
  );
};

export default Hero;
