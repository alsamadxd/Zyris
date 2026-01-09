import React from "react";
import { useRef } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const PriceDetails = () => {
  const { cart } = useCart();
  const totalPrice = useRef(0);
  const navigate = useNavigate();

  // const getTotalPrice=(price)=>{
  //   totalPrice.current+=price;
  //   // setTotal(totalPrice.current);
  // }

  const calculateTotalPrice = () => {
    totalPrice.current = 0; // Reset total before recalculating
    cart.cart?.forEach((product) => {
      totalPrice.current += product.price; // Add product price to total
    });
  };

  // Call calculateTotalPrice before rendering
  calculateTotalPrice();

  let deliveryCharges = 49;
  if (totalPrice.current > 499) {
    deliveryCharges = 0;
  }

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK",
      amount: (totalPrice.current + deliveryCharges) * 100,
      currency: "INR",
      name: "Zyris",
      description: "Thank you for shopping with us. ",

      handler: ({ payment_id }) => {
        navigate("/");
      },
    };

    const paymentObject=new window.Razorpay(options);
    paymentObject.open()
  };

  return (
    <div className="flex flex-col max-h-80 w-100 p-5 gap-4 rounded-xl overflow-hidden shadow-lg bg-sky-50 border-2 border-blue-200">
      <h1 className="text-3xl text-center border-b-2 mb-2">Price Details</h1>
      <div className="flex justify-between  px-4 mr-5 text-xl ">
        <h1 className="">Total item</h1>
        <span>{cart.cart.length}</span>
      </div>
      <div className="flex justify-between  px-4 mr-5 text-xl ">
        <h1 className="">Delivery Charges</h1>
        <span>Rs.{deliveryCharges}</span>
      </div>

      <div className="flex justify-between font-semibold px-4 mr-5 text-2xl ">
        <h1 className="">Total Amount</h1>
        <span>Rs. {totalPrice.current + deliveryCharges}</span>
      </div>
      <div className="font-bold  text-gray-400">
        {deliveryCharges > 0
          ? "Not Eligible for free shipping"
          : "Eligible for free shipping"}
      </div>
      {/* <h3>You will save .... on this order</h3> */}

      <button onClick={displayRazorpay} className="bg-blue-500 font-semibold  cursor-pointer text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none transition ">
        Place Order
      </button>
    </div>
  );
};

export default PriceDetails;
