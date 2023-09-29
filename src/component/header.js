import React from "react";
import logo from "../assest/logo.png";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { CartState } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";

function Header({ isScrollCategory }) {
  const { cart } = CartState();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FFFFFF] py-4 px-4 sm:px-10 border-b-2 border-[#303030]">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="mb-4 sm:mb-0" />

        <div className="flex items-center">
          <span
            className="mr-4 text-md text-[#303030] hover:text-[#cbab90]"
            onClick={isScrollCategory}
          >
            Category
          </span>
          <div className="mr-4">
            <FaSearch />
          </div>

          <div onClick={() => navigate("/cart")} className="relative">
            <FaCartPlus />
            <span className="rounded-full border-[1px] border-[#000] bg-[#000] text-[#fff] text-sm px-2 -mt-[21px] absolute top-0 left-2">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
