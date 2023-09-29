import React from "react";
import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "react-icons/ri";
import logo from "../assest/logo.png";

function Footer() {
  return (
    <div className="bg-[#f0e0c6]">
      <div className="container mx-auto py-6 md:py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
          <div>
            <img src={logo} alt="logo" className="mb-4 sm:mb-0" />
          </div>
          <div>
            <span className="text-xl font-semibold">About us</span>
            <p className="mt-4 font-normal">
              Welcome to our exquisite jewelry website, where elegance meets
              craftsmanship. We take pride in curating a stunning collection of
              timeless and contemporary pieces, meticulously designed to adorn
              your unique style. We invite you to explore our world of precious
              gems and metals, and find the perfect jewelry piece that reflects
              your individuality.
            </p>
          </div>
          <div>
            <span className="text-xl font-semibold">Sign up for updates</span>
            <div className="flex flex-col gap-2 items-start mt-4">
              <input placeholder="Email" className="p-2 my-2 md:my-0 md:mr-2" />
              <button className="bg-[#B97B18] py-2 px-4 text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:mt-0">
            <span className="text-xl font-semibold">Contact</span>
            <div className="flex items-center md:items-center gap-3 mt-4 md:mt-0">
              <RiInstagramFill style={{ fontSize: "24px" }} />
              <RiFacebookCircleFill style={{ fontSize: "24px" }} />
              <RiTwitterFill style={{ fontSize: "24px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
