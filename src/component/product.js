import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { CartState } from "../Context/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";

function Product() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const { setCart, cart } = CartState();
  const [isExpand, setIsExpand] = useState(false);

  const handleCart = (data) => {
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
    toast.success("Successfully added product !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
          <div className="md:order-2 flex justify-center">
            <img
              src={location.state?.url}
              alt={location.state?.name}
              className="h-3/4 w-[70%]"
            />
          </div>
          <div className="md:order-1">
            <p className="text-2xl md:text-4xl font-normal text-[#000]">
              {location.state.name}
            </p>
            <div className="flex mt-4">
              <BiDollar />
              <p className="text-base md:text-lg -mt-[4px]">
                {location.state.price}
              </p>
              <span className="-mt-[4px] ml-1">& Free Shipping</span>
            </div>
            {isExpand ? (
              <p className="text-[#777777] pt-4 md:pt-8">
                {location.state.description}
              </p>
            ) : (
              <p className="text-[#777777] pt-4 md:pt-8">
                {location.state.description.slice(0, 100)}{" "}
              </p>
            )}
            <button
              className="text-green-600 underline"
              onClick={() => setIsExpand(!isExpand)}
            >
              {isExpand ? "Read Less" : "Read More"}
            </button>
            <div className="flex pt-6 md:pt-10">
              <div
                className="border-[1px] border-[#e8e8e8] px-4 py-1"
                onClick={() => setCount(count - 1)}
              >
                <AiOutlineMinus />
              </div>
              <div className="border-[1px] border-[#e8e8e8] px-4 py-1">
                {count}
              </div>
              <div
                className="border-[1px] border-[#e8e8e8] px-4 py-1"
                onClick={() => setCount(count + 1)}
              >
                <AiOutlinePlus />
              </div>
            </div>
            <button
              className="border-2 border-[#303030] py-2 px-8 mt-6 md:mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
              onClick={() =>
                handleCart({ detail: location.state, numbers: count })
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </Layout>
      <ToastContainer />
    </>
  );
}

export default Product;
