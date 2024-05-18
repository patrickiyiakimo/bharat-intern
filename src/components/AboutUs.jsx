import React from "react";
import About_us from "../Bharatintern images/ml-75c4224683a93131a31841c29761e808.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-900">
      <p className="font-semibold text-center text-6xl">About Us</p>
      <section>
        <img src={About_us} alt="coder" />
        <p>
          About Us
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusantium obcaecati cupiditate optio velit consequatur autem rerum
            commodi aperiam placeat fugiat, facilis sequi veritatis voluptatem
            vitae itaque nihil dicta sit ducimus totam! Iure recusandae, illo
            vel dolore minus odio commodi consequatur facilis deserunt similique
            quos omnis blanditiis. Adipisci, voluptate rem.
          </span>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
