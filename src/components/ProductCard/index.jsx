import React from "react";
// import { useContext } from "react";
import { useCart } from "../../context/CartContext";
import { findProductsInCart } from "../../utils/findProductsInCart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  let imgUrl = product.images[0];
  if (
    imgUrl === "https://placehold.co/600x400" ||
    imgUrl === "https://placehold.co/640/480/any"
  ) {
    imgUrl = "/z.png";
  }

  const { cart, cartDispatch } = useCart();
  const isProductInCart = findProductsInCart(cart.cart, product.id);
  //  console.log(isProductInCart);

  const navigate=useNavigate();
  

  const addToCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("cart")
  };
  return (
    <div className="w-full max-w-xs h-110 rounded-xl overflow-hidden shadow-lg bg-sky-50 transform border-2 border-blue-200 hover:shadow-sky-400 transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src={`${imgUrl}`}
        alt={product.name}
      />
      <div className="px-6 py-4 h-44 mb-1">
        <div className="font-bold text-xl text-gray-800">{product.title}</div>
        <p className="text-slate-800 text-base mt-2">
          {product.description.length > 20
            ? `${product.description.slice(0, 50)}...`
            : product.description}
          {/* {product.slug} */}
        </p>
      </div>
      <div className="px-3 py-2 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          Rs.{product.price}
        </span>
        <button
          onClick={() => addToCartClick(product)}
          className="bg-blue-500 font-semibold  cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none transition "
        >
          <span className="material-icons-outlined text-3xl">
            {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
          </span>
          {isProductInCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
