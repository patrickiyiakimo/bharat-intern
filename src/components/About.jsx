import React from "react";
import about_img from "../Bharatintern images/service-right-main-pic-602fe3ef2a065ca3d4210fc0085b79bd.png";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div className="bg-green-50 pb-20">
      <div className="ml-20 text-2xl font-semibold mb-10 text-blue-900 pt-20">
        About us
      </div>
      <p className="text-blue-900 ml-20 mb-10 flex">
        At Bharat Intern, we are passionate about empowering innovations that
        <br />
        shape a better future for businesses and individuals alike.
      </p>
      <div className="flex   ">
        <p>
          <AboutText className="" />
        </p>
        <img src={about_img} alt="about img" className="mr-40 pl-20"/>
      </div>
    </div>
  );
};

export default About;
