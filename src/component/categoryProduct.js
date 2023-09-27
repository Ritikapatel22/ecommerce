import React from "react";
import Header from "./header";
import { BsFilterCircleFill } from "react-icons/bs";
import Data from "../categoryDetail.json";
import { BiDollar } from "react-icons/bi";
import Footer from "./footer";

function CategoryProduct() {
  return (
    <>
      <Header />
      <div className="p-10">
        <div className="flex gap-2 px-[20px]">
          <div className="mt-1">
            <BsFilterCircleFill />
          </div>
          <span>filters</span>
        </div>
        <div>
          <div className="grid gap-4 grid-cols-4 justify-items-center px-[20px] mb-[20px]">
            {Data[`${window.location.href.split("/")[4].toLowerCase()}`]?.map(
              (val) => {
                return (
                  <div
                    className="w-[300px]"
                    //   onClick={() =>
                    //     navigate(`/product/${val.key}/${val.id}`, { state: val })
                    //   }
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
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryProduct;
