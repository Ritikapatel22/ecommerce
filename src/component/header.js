import React from "react";
import logo from "../assest/logo.png";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { CartState } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { cart } = CartState();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FFFFFF] py-4 px-10 border-b-2 border-[#303030]">
      <div className="flex justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center">
          <span
            className="mr-[15px] text-md text-[#303030] hover:text-[#cbab90]"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span className="mr-[15px] text-md text-[#303030] hover:text-[#cbab90]">
            About
          </span>
          <span className="mr-[15px] tesxt-md text-[#303030] hover:text-[#cbab90]">
            Contact
          </span>
          <div className="">
            <FaSearch className="mr-[15px]" />
          </div>
          <div onClick={() => navigate("/cart")}>
            <FaCartPlus />
          </div>
          <span className="rounded-full border-[1px] border-[#000] bg-[#000] text-[#fff] text-sm px-2 -mt-[21px]">
            {cart.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
