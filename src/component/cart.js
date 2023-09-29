import React, { useEffect } from "react";
import { CartState } from "../Context/CartProvider";
import Layout from "./layout";

function Cart() {
  const { cart, setAmount } = CartState();
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
      <Layout>
        <div className="pt-10 px-4 md:px-12 pb-32">
          <p className="text-4xl md:text-6xl text-[#2e2e2e]">Cart</p>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-center text-[#000] bg-[#faf5f0] border-2 border-[#e8e8e8]">
                      <th className="px-4 md:px-10 py-3">Product</th>
                      <th className="px-2 md:px-4 py-3">Price</th>
                      <th className="px-4 md:px-10 py-3">Quantity</th>
                      <th className="px-2 md:px-4 py-3">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((val) => {
                      const amount = val.numbers * val.detail?.price;
                      return (
                        <tr className="border-2 border-[#e8e8e8] text-center">
                          <td className="py-6 md:py-8">{val.detail?.name}</td>
                          <td className="py-6 md:py-8">{val.detail?.price}</td>
                          <td className="py-6 md:py-8">{val?.numbers}</td>
                          <td className="py-6 md:py-8">{amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full md:w-[360px]">
              <p className="text-md px-2 md:px-4 py-3 font-semibold tracking-wide text-[#000] bg-[#faf5f0] border-2 border-[#e8e8e8]">
                CART TOTALS
              </p>
              <div className="border-2 border-b-2 border-[#e8e8e8] text-[#565656]">
                <div className="flex justify-between py-4 md:py-6 px-2 md:px-4">
                  <p>Total</p>
                  <p>{getTotalPrice()}</p>
                </div>
                <p className="text-sm text-[#565656] px-4">Have a coupon?</p>
                <div className="px-4 py-2">
                  <button className="w-full py-4 text-center border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff]">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Cart;
