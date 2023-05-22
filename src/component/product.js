import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { CartState } from "../Context/CartProvider";
import Header from "./header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const { setCart, cart } = CartState();

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
      <Header />
      <div className="grid gap-2 grid-cols-2 px-[10%] py-[2%]">
        <div className="">
          <img
            src={location.state.url}
            alt={location.state.name}
            className="h-3/4 w-[95%]"
          />
        </div>
        <div className="mt-4">
          <p className="text-4xl font-normal text-[#000]">
            {location.state.name}
          </p>
          <div className="mt-8 flex">
            <BiDollar />
            <p className="text-lg text-[#a86e3b] -mt-[4px]">
              {location.state.price}
            </p>
            <span className="-mt-[4px] ml-1">& Free Shipping</span>
          </div>
          <p className="text-[#777777] pt-8">
            Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at volutpat
            arcu lacinia. Aliquam id ullamcorper augue. Fusce feugiat nibh et
            nisl mollis hendrerit. Mauris sit amet nulla in augue laoreet
            lobortis ac eleifend nunc. Quisque eleifend sollicitudin nulla, et
            consequat eros. Donec pellentesque dapibus massa ut cursus.
          </p>
          <p className="text-[#777777] pt-6">
            Quisque ut augue eu dui semper eleifend. Aliquam imperdiet nisl
            libero, vitae vulputate lectus fringilla eget.
          </p>
          <div className="flex pt-10">
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
            className="border-2 border-[#303030] py-2 px-8 mt-8 hover:bg-[#303030] 
          hover:text-[#FFFFFF] absolute right-[600px] bottom-[365px]"
            onClick={() =>
              handleCart({ detail: location.state, numbers: count })
            }
          >
            ADD TO CARD
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Product;
