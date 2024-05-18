import React from "react";
import hero_image from "../Bharatintern images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png";


const Hero = () => {
  return (
    <div className="pb-10 bg-gray-900">
      <div className="flex pt-40 text-white bg-gray-900 ">
        <p className="pl-20 pb-40 pt-40 text-5xl font-bold">
          Unlock your potential with
          <span className="text-blue-400">
            Bharat Intern <br />
          </span>
          <span className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nam vero non, voluptas alias reprehenderit iure repudiandae eaque
            odio eveniet autem saepe! Impedit!
          </span>
        </p>
        <img src={hero_image} alt="main" className="ml-20 pb-20 bg-gray-900 mr-20 " />
      </div>
      <button className="ml-40  font-bold text-white bg-green-400 hover:border-green-400 rounded p-3 w-40 hover:bg-purple-500">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
