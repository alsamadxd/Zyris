import React from "react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const HorizontalProductCard = ({ product }) => {
  
   if (!product) {
     return null;
   }
  let imgUrl = product?.images?.[0];
  if (
    imgUrl === "https://placehold.co/600x400" ||imgUrl === "https://placeimg.com/640/480/any"
  ) {
    imgUrl = "/z.png";
  }
  const {cartDispatch}=useCart();

  const onRemoveClick=(product)=>{
    cartDispatch({
      type:'REMOVE_FROM_CART',
      payload:{id:product.id}
    })
  }

  const [Quantity, setQuantity] = useState(1)
  return (
    <div className=" mx-auto flex flex-col gap-5 w-160 p-5 rounded-xl overflow-hidden shadow-lg bg-sky-50 border-2 border-blue-200">
      <div className=" flex gap-5  ">
        <img
          className="h-full w-40 object-cover"
          src={`${imgUrl}`}
          alt={product.name}
        />
        <div className="flex flex-col w-100 gap-3">
          <div className="font-bold text-xl text-gray-800">{product.title}</div>
          <div className="font-bold  text-gray-400 mb-4">{product.slug}</div>
          <div className=" flex gap-3 font-bold items-center text-gray-400">
            <span>Quantity</span>
            <button onClick={()=>{
              setQuantity(Quantity-1);
              
              }} className="border-2 cursor-pointer px-3 border-slate-950 rounded-full">
              -
            </button>
            <span>{Quantity}</span>
            <button onClick={()=>setQuantity(Quantity+1)} className="border-2 cursor-pointer px-3 border-slate-950 rounded-full">
              +
            </button>
          </div>
          <div className="font-bold  text-gray-400">
            Eligible for free shipping
          </div>
        </div>
        <div className="flex items-center  text-slate-700 font-bold text-4xl">{`Rs.${product.price * Quantity}`}</div>
      </div>
      <div className="flex justify-center gap-10 my-3 text-sm">
        <button onClick={()=>onRemoveClick(product)} className="bg-blue-500 font-semibold  cursor-pointer text-white px-4 py-2 rounded-full hover:bg-red-800 focus:outline-none transition ">
          Remove From Cart
        </button>
        <button className="bg-blue-500 font-semibold  cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none transition ">
          Move to whishlist
        </button>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
