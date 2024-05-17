import React from "react";
import main_image from "../Bharatintern images/service-left-main-pic-ac969d4475c0c5d184cf467d3321d7a2.png";

const Main = () => {
  return (
    <div className="pt-20 bg-gray-900 font-mono">
      <p className="text-3xl font-semibold text-white text-right pr-32 mb-10">
        Get Specialised In These Domains
      </p>
      <p className="text-white text-right pr-20">
        At Bharat Intern, we excel in various domains to bring your ideas to
        life.
      </p>
      <p className="text-white text-right pr-96">Our skills include:</p>
      <div>
        <img src={main_image} alt="programming" className="pl-40" />
      </div>
    </div>
  );
};

export default Main;
