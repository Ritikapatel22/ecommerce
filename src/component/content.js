import React, { useRef } from "react";
import main from "../assest/hero.jpeg";
import model from "../assest/model.jpeg";
import ring from "../assest/ring.jpeg";
import Data from "../data.json";
import { BiDollar } from "react-icons/bi";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import Category from "./category";
import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "react-icons/ri";

function Content() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const compRef = useRef(null);
  const isScroll = () => scrollToDiv(compRef);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="w-full">
        <img
          className="top-0 left-0 w-full h-[75vh] object-cover"
          src={main}
          alt="/"
        />
        <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-[#303030]">
          <p className="text-sm">New collection</p>
          <p className="font-bold text-7xl pb-4 w-[60%]">
            THE NEW RING SENSATION
          </p>
          <p className="text-md w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button
            className="border-2 border-[#303030] py-2 px-8 mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
            onClick={isScroll}
          >
            Shop now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <div ref={compRef}>
          <p className="text-sm text-center text-[#62615c] font-semibold">
            POPULAR PRODUCTS
          </p>
          <p
            className="text-4xl font-bold relative after:content-[' '] 
          after:absolute after:w-[90%]] after:h-[1px] after:bg-[#a86e3b] 
          after:m-auto after:left-0 after:right-0 after:bottom-0 after:mx-[10px] after:top-[100%] after:my-auto"
          >
            TRENDING NOW
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-4 justify-items-center px-[20px] mb-[20px]">
        {Data?.data.map((val) => {
          return (
            <div
              className="w-[300px]"
              onClick={() =>
                navigate(`/product/${val.key}/${val.id}`, { state: val })
              }
            >
              <div className="overflow-hidden h-[42vh]">
                <img
                  src={val.url}
                  alt={val.name}
                  className="h-[42vh] w-[300px] filter"
                />
              </div>
              <p className="text-center text-lg text-[#303030] font-semibold mt-[5px]">
                {val.name}
              </p>
              <div className="flex justify-center">
                <BiDollar />
                <p className="-mt-[4px]">{val.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Category />
      {/* <div className="grid gap-4 grid-cols-2 m-[10%]">
        <div className="w-1/2">
          <p className="text-sm">UNIQUE PIECES</p>
          <p className="text-6xl">BE ALWAYS ON TREND</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button
            className="border-2 border-[#303030] py-2 px-8 mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
            onClick={isScroll}
          >
            Shop now
          </button>
        </div>
        <div className="relative">
          <img
            src={model}
            alt="model"
            className="absolute -z-1 right-0 top-0"
          />
          <img
            src={ring}
            alt="ring"
            className="absolute pt-[118px] pr-[20%] right-[40%]"
          />
        </div>
      </div> */}
      <div className="bottom-0 bg-[#f0e0c6] flex justify-center items-center gap-96 py-9">
        <div className="w-1/5">
          <span className="text-xl font-semibold">About us</span>
          <p className="mt-6 font-normal">
            Welcome to our exquisite jewelry website, where elegance meets
            craftsmanship. We take pride in curating a stunning collection of
            timeless and contemporary pieces, meticulously designed to adorn
            your unique style.we invite you to explore our world of precious
            gems and metals, and find the perfect jewelry piece that reflects
            your individuality.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-semibold m-[10px]">
            Sign up for the more update
          </p>
          <div className="flex flex-col items-center">
            {" "}
            {/* Use flex and items-center for vertical and horizontal centering */}
            <input placeholder="Email" className="p-2 my-2" />
            <button className="bg-[#B97B18] py-2 px-4 text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="">
          <span className="text-xl font-semibold">Contact</span>
          <div className="flex gap-3">
            <RiInstagramFill style={{ fontSize: "24px" }} />{" "}
            <RiFacebookCircleFill style={{ fontSize: "24px" }} />
            <RiTwitterFill style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
