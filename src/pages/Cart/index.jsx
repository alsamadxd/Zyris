import React from "react";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import HorizontalProductCard from "../../components/HorizontalProductCard";
// import { useState } from "react";
import PriceDetails from "../../components/PriceDetails";




const Cart = () => {
  const {cart}=useCart();
  console.log(cart.cart);

  
  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <main className="mx-auto p-8  ">
        <h1 className="text-5xl text-center p-2 mb-5 font-bold">Your Cart </h1>

        {cart.cart?.length > 0 ? (
          <div className="flex gap-5">
            <div className="flex flex-col gap-8">
              {cart.cart.map((product) => {
                
                return (
                  <HorizontalProductCard key={product.id} product={product} />
                );
              })}
            </div>
            <PriceDetails />
          </div>
        ) : (
          <div className="text-center text-4xl text-slate-700">
            Your Cart is Empty
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
