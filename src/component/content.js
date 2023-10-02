import React, { useRef, useState } from "react";
import main from "../assest/hero.jpeg";
import Data from "../data.json";
import { BiDollar } from "react-icons/bi";
import { MdShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Category from "./category";
import Layout from "./layout";
import { CartState } from "../Context/CartProvider";

function Content() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const compRef = useRef(null);
  const isScroll = () => scrollToDiv(compRef);
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleHover = (index) => {
    setHoveredImage(index);
  };

  const handleHoverOut = () => {
    setHoveredImage(null);
  };

  const [count, setCount] = useState(1);
  const { setCart, cart } = CartState();

  const handleCart = (data) => {
    data.event.stopPropagation();
    const existingProductIndex = cart.findIndex(
      (item) => item.detail.id === data.detail.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        numbers: updatedCart[existingProductIndex].numbers + count,
      };
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...data, numbers: data.numbers }];
      setCart(updatedCart);
    }
  };
  return (
    <>
      <Layout>
        <div className="w-full relative">
          <img
            className="top-0 left-0 w-full h-[75vh] object-cover"
            src={main}
            alt="/"
          />
          <div className="absolute top-1/2 left-[32%] transform -translate-x-1/2 -translate-y-1/2 text-[#303030] text-left p-4 md:p-8">
            <p className="text-xs md:text-sm">New collection</p>
            <p className="font-bold text-3xl md:text-7xl pb-2 md:pb-4 w-full md:w-[60%]">
              THE NEW RING SENSATION
            </p>
            <p className="text-sm md:text-md w-full md:w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut el it
              tellus, luctus nec ullamcorper matt is, pulvinar dapibus leo.
            </p>
            <button
              className="border-2 border-[#303030] py-2 px-6 md:py-3 md:px-8 mt-4 md:mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center px-4 md:px-20 mb-4 md:mb-20">
          {Data?.data.map((val, index) => (
            <div
              className="w-full md:w-[calc(50% - 20px)] lg:w-[calc(25% - 20px)]"
              onClick={() =>
                navigate(`/product/${val.key.toLowerCase()}/${val.id}`, {
                  state: val,
                })
              }
              key={val.id}
            >
              <div
                className="overflow-hidden h-[50vh] relative"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverOut}
              >
                <img
                  src={val.url}
                  alt={val.name}
                  className={`h-full w-full object-cover transition-transform ${
                    hoveredImage === index ? "filter" : ""
                  }`}
                />
                {hoveredImage === index && ( // Render icons when image is hovered
                  <div className="absolute top-0 right-0 p-2">
                    <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-md">
                      <MdFavoriteBorder size={20} />
                    </div>
                    <div
                      className="mt-2 flex items-center justify-center bg-white rounded-full p-1 shadow-md"
                      onClick={(event) =>
                        handleCart({
                          detail: val,
                          numbers: count,
                          event: event,
                        })
                      }
                    >
                      <MdShoppingCart size={20} />
                    </div>
                  </div>
                )}
              </div>
              <p className="text-center text-lg text-[#303030] font-semibold mt-2 md:mt-5">
                {val.name}
              </p>
              <div className="flex justify-center">
                <BiDollar />
                <p className="-mt-[4px]">{val.price}</p>
              </div>
            </div>
          ))}
        </div>
        <Category />
      </Layout>
    </>
  );
}

export default Content;
