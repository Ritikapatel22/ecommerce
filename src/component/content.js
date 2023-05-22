import React, { useRef } from "react";
import main from "../assest/hero.jpeg";
import model from "../assest/model.jpeg";
import ring from "../assest/ring.jpeg";
import Data from "../data.json";
import { BiDollar } from "react-icons/bi";
import Header from "./header";
import { useNavigate } from "react-router-dom";

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
              onClick={() => navigate(`/product/${val.id}`, { state: val })}
            >
              <div
                className="overflow-hidden h-[42vh]"
              >
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
      <div className="grid gap-4 grid-cols-2 m-[10%]">
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
      </div>
    </>
  );
}

export default Content;
