import React, { useState } from "react";
import logo from "../assest/logo.png";
import { FaSearch, FaCartPlus, FaSortDown, FaArrowRight } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { CartState } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";
import data from "../categoryDetail.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ isScrollCategory }) {
  const { cart } = CartState();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();
  const toggleSubMenu = () => {
    const submenu = document.querySelector(".submenu");
    submenu.classList.toggle("open");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const product = findProductByName(searchTerm);
    const cleanSearchTerm = searchTerm.replace(/\d+/g, "");
    if (product) {
      navigate(`/product/${cleanSearchTerm}/${product.id}`, {
        state: product,
      });
    } else {
      toast.error("No found", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const findProductByName = (name) => {
    for (const category in data) {
      const products = data[category];
      const product = products.find(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (product) {
        return product;
      }
    }
    return null;
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] py-4 px-4 sm:px-10 border-b-2 border-[#303030]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" className="mb-4 sm:mb-0" />
          <div className="flex items-center">
            {isSearch ? (
              <div class="relative">
                <div class="relative flex items-center mr-4">
                  <input
                    type="text"
                    class="w-full px-4 py-1 pr-10 border rounded-lg focus:outline-none focus:ring focus:border-[#B97B18]"
                    placeholder="Search product"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={handleSearch}
                  >
                    <FaArrowRight />{" "}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mr-4" onClick={() => setIsSearch(true)}>
                <FaSearch />
              </div>
            )}
            <div onClick={() => navigate("/cart")} className="relative mr-6">
              <FaCartPlus />
              <span className="rounded-full border-[1px] border-[#000] bg-[#000] text-[#fff] text-sm px-2 -mt-[21px] absolute top-0 left-2">
                {cart.length}
              </span>
            </div>
            <div>
              <div onClick={() => setPopupOpen(!isPopupOpen)}>
                <MdOutlineMenu />
              </div>
              {isPopupOpen && (
                <div className="export bg-[#f0e0c6] absolute top-[60px] right-[20px] w-[140px] z-[97]">
                  <div className="relative z-10 before:absolute before:content-[''] before:-top-[4px] before:rotate-45 before:right-[7px] before:bg-[#f0e0c6] before:h-[40px] before:w-[40px] before:-z-10">
                    <div
                      className="py-2 pl-3 cursor-pointer"
                      onClick={toggleSubMenu}
                    >
                      <div className="flex gap-2">
                        <span className="text-base font-normal">Category</span>
                        <FaSortDown />
                      </div>
                      <div className="submenu hidden">
                        <hr className="bg-[#000000]" />
                        <div
                          class="py-2 pl-3 cursor-pointer"
                          onClick={() => navigate(`/product/ring`)}
                        >
                          <span class="text-base font-normal">Ring</span>
                        </div>
                        <div
                          class="py-2 pl-3 cursor-pointer"
                          onClick={() => navigate(`/product/earring`)}
                        >
                          <span class="text-base font-normal">Earring</span>
                        </div>
                        <div
                          class="py-2 pl-3 cursor-pointer"
                          onClick={() => navigate(`/product/bracelet`)}
                        >
                          <span class="text-base font-normal">Bracelet</span>
                        </div>
                        <div
                          class="py-2 pl-3 cursor-pointer"
                          onClick={() => navigate(`/product/necklace`)}
                        >
                          <span class="text-base font-normal">Necklace</span>
                        </div>
                      </div>
                    </div>
                    <hr className="bg-[#000000]" />
                    <div className="py-2 pl-3 cursor-pointer">
                      <span className="text-base font-normal">Trending</span>
                    </div>
                    <hr className="bg-[#000000]" />
                    <div className="py-2 pl-3 cursor-pointer">
                      <span className="text-base font-normal">Profile</span>
                    </div>
                    <hr className="bg-[#000000]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Header;
