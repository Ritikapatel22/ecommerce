import React, { useState } from "react";
import Data from "../categoryDetail.json";
import { BiDollar } from "react-icons/bi";
import Layout from "./layout";
import { MdShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { CartState } from "../Context/CartProvider";

function CategoryProduct() {
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
        <div className="p-4 md:p-10">
          <div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center px-4 md:px-[20px] mb-4 md:mb-[20px]">
              {Data[`${window.location.href.split("/")[4].toLowerCase()}`]?.map(
                (val, index) => {
                  return (
                    <div className="w-full md:w-[300px]">
                      <div
                        className="overflow-hidden h-[42vh]"
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
                        <p className="-mt-1 md:-mt-[4px]">{val.price}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CategoryProduct;
