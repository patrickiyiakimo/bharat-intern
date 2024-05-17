import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-7 text-gray-200 bg-gray-600 font-mono pt-20 pl-40">
        <p className="font-semibold text-xl">Find More</p>
        <p className="font-semibold text-xl">Follow Us</p>
        <p className="font-semibold text-xl">Address</p>
        <p>LinkedIn</p>
        <p>Bhopal, Madhya Pradesh, India</p>
        <p>About</p>
        <p>Telegram</p>
        <p>Email: bharatintern.info@gmail.com</p>
        <p>Contact Us</p>
        <p>YouTube</p>
        <p>Apply</p>
      </div>
      <div className="bg-gray-600 p-10 text-white font-mono">
        <p className="text-center">
          <hr className="pt-5" />
          Copyright © 2024 Bharat Intern. All rights reserved by BharatIntern
        </p>
      </div>
    </div>
  );
};

export default Footer;
