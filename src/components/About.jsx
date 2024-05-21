import React from "react";
import about_img from "../Bharatintern images/service-right-main-pic-602fe3ef2a065ca3d4210fc0085b79bd.png";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div className="bg-gray-900 pb-10 md:pb-20">
      <div className="ml-5 md:ml-20 text-2xl font-mono font-semibold mb-5 text-white pt-20">
        About us
      </div>
      <p className="text-white ml-5 md:ml-20 mb-5 font-mono flex">
        At Bharat Intern, we are passionate about empowering innovations that
        <br />
        shape a better future for businesses and individuals alike.
      </p>
      <div className=" md:grid md:grid-cols-2   ">
        <p>
          <AboutText className="bg-green-400" />
        </p>
        <img src={about_img} alt="about img" className="ml-10 md:ml-40 sm:ml-60"/>
      </div>
    </div>
  );
};

export default About;
