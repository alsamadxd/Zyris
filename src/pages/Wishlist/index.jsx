import React from "react";
import Navbar from "../../components/Navbar";
import HorizontalProductCard from "../../components/HorizontalProductCard";
import PriceDetails from "../../components/PriceDetails";
import { useWishlist } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist(); // Accessing 'wishlist' from context
  console.log(wishlist); // Log the 'wishlist' to check the data

  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <main className="mx-auto p-8">
        <h1 className="text-5xl text-center p-2 mb-5 font-bold">Wishlist</h1>

        {wishlist.length > 0 ? ( // Checking if 'wishlist' has items
          <div className="flex gap-5">
            <div className="flex flex-col gap-8">
              {wishlist.map((product) => {
                // Iterating through 'wishlist'
                return (
                  <HorizontalProductCard key={product.id} product={product} />
                );
              })}
            </div>
            <PriceDetails />
          </div>
        ) : (
          <div className="text-center text-4xl text-slate-700">
            No Items in your Wishlist
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
