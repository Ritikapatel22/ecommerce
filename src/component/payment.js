import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { CartState } from "../Context/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
  const { amount, setCart } = CartState();
  const location = useLocation();

  const handlePay = async () => {
    await axios({
      url: "https://api.na.bambora.com/v1/payments",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Passcode MzgzNjExNzQxOjM3Y0YyZEZEMjU1QzQ2YTM5N2E0NzcyM0FCNTAwNzc4",
      },
      data: {
        amount: amount,
        payment_method: "card",
        card: location.state,
      },
    })
      .then((res) => {
        setCart([]);
        toast.success("Successfully done payment !", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => console.log(err, "err"));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl text-[#3BD115] py-8">
        Successfully created the payment profiles !
      </h1>
      <p className="text-lg font-bold">Amount : {amount} </p>
      <button
        className="border-2 border-[#303030] py-2 px-8 mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
        onClick={handlePay}
      >
        Pay {amount}
      </button>
      <ToastContainer />
    </div>
  );
}

export default Payment;
