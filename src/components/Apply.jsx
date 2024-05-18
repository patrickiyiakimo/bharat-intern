import React from "react";
import image_one from "../Bharatintern images/wd-02b6a38300b1e58689d0ee466bd73119.png";
import image_two from "../Bharatintern images/ml-75c4224683a93131a31841c29761e808.png";
import image_three from "../Bharatintern images/ds-52dc057b9c881e2de872abc999eee8c7.png";
import image_four from "../Bharatintern images/ad-84506a6c9d40392c7d743a2a4e4f85e4.png";
import image_five from "../Bharatintern images/fs-e46224840cdf6333df6a3709ad781138.png";


const Apply = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="pt-40 text-center text-2xl  font-semibold font-mono pb-20">
        <p>INTERNSHIPS WE OFFER!</p>
      </div>
      <span className="bg-gray-900 grid grid-cols-3 gap-10">
        <img src={image_one} alt="html" />
        <img src={image_two} alt="html" />
        <img src={image_three} alt="html" />
        <img src={image_four} alt="html" />
        <img src={image_five} alt="html" />
      </span>
    </div>
  );
};

export default Apply;
