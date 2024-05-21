import React from "react";
import About_us from "../Bharatintern images/contact-img-71ccec92531e0f5a57feb8c853f743de.png";
import Footer from "./Footer";
import OnlineCommunity from "./OnlineCommunity";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 font-mono text-white">
      <div>
        <p className="sm:pt-40 text-center text-2xl font-semibold pt-20 md:pt-40 md:pb-20">
          About Us
        </p>
        <section className="md:flex pb-20">
          <img
            src={About_us}
            alt="coder"
            className="w-2/3 md:w-1/2 pl-20 md:pl-1 sm:pl-40"
          />
          <span className="pr-20 pl-20">
            <p className="font-semibold pl-10 pr-10 text-center md:pt-10 text-2xl md:pb-4">
              About Us
            </p>
            <p className="pl-5 pr-10">
         
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nulla perspiciatis error numquam perferendis, quas fugit
              repellendus soluta officia ipsam, quod molestias quasi nemo, natus
              ad commodi voluptatem dicta. Adipisci voluptatem veniam totam
              quidem, est nisi quam quia ab fugiat dignissimos, sequi eligendi
              sit, magnam doloremque deserunt dolore? Adipisci quo alias dolor
              sapiente nam velit aut numquam quasi laboriosam tempora illum ex
              commodi, eos possimus iste rem eum illo? Reiciendis, quisquam
              porro. Laborum cum corrupti nemo vero quae? Soluta nobis, animi
              amet ut aliquid nostrum. Ex sapiente libero est? Voluptate
              expedita, culpa animi deserunt dolorem totam perspiciatis dicta!
              Quas eveniet iste ipsum fuga sapiente libero voluptatum et
              accusamus odio perferendis.
            </p>
          </span>
        </section>
      </div>
      <OnlineCommunity />
      <Footer />
    </div>
  );
};

export default AboutUs;
