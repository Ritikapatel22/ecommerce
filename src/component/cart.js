import React, { useEffect } from "react";
import Header from "./header";
import { CartState } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setAmount } = CartState();
  const navigate = useNavigate();
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.detail?.price * item?.numbers,
      0
    );
  };
  useEffect(() => {
    setAmount(getTotalPrice());
  }, [cart]);

  return (
    <>
      <Header />
      <div className="pt-10 px-[12%]">
        <p className="text-6xl text-[#2e2e2e]">Cart</p>
        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-1 md:col-span-2">
            <table className="table-auto">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-center text-[#000] bg-[#faf5f0] border-2 border-[#e8e8e8]">
                  <th className="px-[130px] py-3">Product</th>
                  <th className="px-[50px] py-3">Price</th>
                  <th className="px-[100px] py-3">Quantity</th>
                  <th className="px-[50px] py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((val) => {
                  const amount = val.numbers * val.detail?.price;
                  return (
                    <tr className="border-2 border-[#e8e8e8] text-center">
                      <td className="py-8">{val.detail?.name}</td>
                      <td className="py-8">{val.detail?.price}</td>
                      <td className="py-8">{val?.numbers}</td>
                      <td className="py-8">{amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-[360px]">
            <p className="text-md px-[20px] py-3 font-semibold tracking-wide  text-[#000] bg-[#faf5f0] border-2 border-[#e8e8e8]">
              CART TOTALS
            </p>
            <div className="border-x-2 border-b-2 border-[#e8e8e8] text-[#565656]">
              <div className="flex justify-between py-6 px-4">
                <p>Total</p>
                <p>{getTotalPrice()}</p>
              </div>
              <p className="text-sm text-[#565656] pl-4">Have a coupon?</p>
              <div className="px-4 py-2">
                <button
                  className="w-full py-4 text-center border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff]"
                  onClick={() => navigate("/checkout")}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
