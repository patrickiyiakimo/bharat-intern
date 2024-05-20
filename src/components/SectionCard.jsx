import React from 'react'
import Image_one from "../Bharatintern images/mca-58d61c8f815a1b3a6d034a2de52a7047.png";
import Image_two from "../Bharatintern images/aicteLogo-04a2096d319b8f848279a6c47d84b713 (1).png"
import Image_three from "../Bharatintern images/msme-d17b99243eac2e92ec9654fbe3c61565.png";

const SectionCard = () => {
  return (
    <div className=" md:grid grid-cols-3 pl-40 md:pb-20 md:pt-20 bg-gray-900">
      <div>
        <img src={Image_one} alt="one" className="pb-10 w-28 mr-36 " />
      </div>
      <div>
        <img src={Image_two} alt="two" className="pb-10 w-28 mr-36" />
      </div>
      <div>
        <img src={Image_three} alt="three" className="pb-10 w-28 mr-36" />
      </div>
    </div>
  );
}

export default SectionCard;