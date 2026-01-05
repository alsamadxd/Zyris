import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { getAllCategories } from "../../api/getAllCategories";


const Home = () => {
  const [products, setProducts] = useState([]);
  // const {cart}=useCart();
  // console.log(cart);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        return err
      }
    };

    fetchProducts();
  }, []);
  // console.log(products);
  

  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <main className="mx-auto p-8 bg-slate-200 min-h-[90vh]">
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-700">No products available</div>
        )}
      </main>
    </div>
  );
};

export default Home;
