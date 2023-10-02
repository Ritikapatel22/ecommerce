import React from "react";
import Data from "../category.json";
import { useNavigate } from "react-router-dom";

function Category({ }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center p-10" >
        <div>
          <p className="text-sm text-center text-[#62615c] font-semibold">
            POPULAR BY
          </p>
          <p
            className="text-4xl font-bold relative after:content-[' '] 
          after:absolute after:w-[90%]] after:h-[1px] after:bg-[#a86e3b] 
          after:m-auto after:left-0 after:right-0 after:bottom-0 after:mx-[10px] after:top-[100%] after:my-auto"
          >
            CATEGORY
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center px-4 md:px-20 mb-4 md:mb-20">
        {Data?.data.map((val) => {
          return (
            <div
              className="w-full md:w-[calc(50% - 20px)] lg:w-[calc(25% - 20px)]"
              onClick={() => navigate(`/product/${val.name.toLowerCase()}`)}
            >
              <div className="overflow-hidden h-[50vh] relative">
                <img
                  src={val.image}
                  alt={val.name}
                  className="h-full w-full object-cover filter"
                />
              </div>
              <p className="text-center text-lg text-[#303030] font-semibold mt-[5px]">
                {val.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
