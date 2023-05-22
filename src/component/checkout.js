import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [nextStep, setNextStep] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry_month: "",
    expiry_year: "",
    cvd: "",
  });

  const [personalDetail, setPersonalDetails] = useState({
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    country: "",
    phone_number: "",
  });

  const handleDetails = (e) => {
    setPersonalDetails({
      ...personalDetail,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckOut = async () => {
    await axios({
      url: "https://api.na.bambora.com/v1/profiles",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Passcode MzgzNjExNzQxOjA5Nzg3YjA4MkIyMTQ4MDhiMzM5MkMzMkUyNkI4OTcw",
      },
      data: {
        card: cardDetails,
      },
    })
      .then((res) => {
        if (res) {
          navigate("/payment", { state: cardDetails });
        }
      })
      .catch((err) => console.log(err, "err"));
  };
  return (
    <>
      {!nextStep ? (
        <div className="mt-[50px] mx-[10%] px-[20%] w-full md:w-3/4">
          <div className="border-[1px] border-[#000] px-2 ">
            <p className="text-3xl border-b-2 border-[#cbab90] pt-2">
              Address Details
            </p>
            <div className="py-4">
              <div className="p-2">
                <label className="mr-2">Address line1 :</label>
                <input
                  name="address_line1"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Address line1"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Address line2 :</label>
                <input
                  name="address_line2"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Address line2"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">City :</label>
                <input
                  name="city"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="City"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Postal code :</label>
                <input
                  name="postal_code"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Postal code"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Phone number :</label>
                <input
                  name="phone_number"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Phone number"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Country :</label>
                <input
                  name="country"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Country"
                  onChange={(e) => handleDetails(e)}
                />
              </div>
            </div>
            <button
              className="px-6 py-2 text-center rounded border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff] mb-[10px]"
              onClick={() => setNextStep(true)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-[50px] mx-[10%] px-[20%] w-full md:w-3/4">
          <div className="border-[1px] border-[#000] px-2 ">
            <p className="text-3xl border-b-2 border-[#cbab90] pt-2">
              Payment Details
            </p>
            <div className="py-4">
              <div className="p-2">
                <label className="mr-2">Name :</label>
                <input
                  name="name"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Card number :</label>
                <input
                  name="number"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="card number"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Expiry month :</label>
                <input
                  name="expiry_month"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Expiry month"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">Expiry year :</label>
                <input
                  name="expiry_year"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="Expiry year"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="p-2">
                <label className="mr-2">CVV :</label>
                <input
                  name="cvd"
                  className="border-2 border-[#e8e8e8] rounded p-1"
                  type="text"
                  placeholder="CVV"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <button
              className="px-6 py-2 text-center rounded border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff] mb-[10px]"
              onClick={handleCheckOut}
            >
              Check out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
