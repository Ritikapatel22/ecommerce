import React from "react";
import Data from "../category.json";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center p-10">
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
      <div className="grid gap-4 grid-cols-4 justify-items-center px-[20px] mb-[20px]">
        {Data?.data.map((val) => {
          return (
            <div
              className="w-[300px]"
              onClick={() => navigate(`/product/${val.name}`)}
            >
              <div className="overflow-hidden h-[42vh]">
                <img
                  src={val.image}
                  alt={val.name}
                  className="h-[42vh] w-[300px] filter"
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
