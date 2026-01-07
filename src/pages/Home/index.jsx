import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductByCategory } from "../../utils/getProductByCategory";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  // const {cart}=useCart();
  // console.log(cart);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      const categories = await getAllCategories();
      const updatedCategories = [{ id: "1ae", name: "All" }, ...categories];
      setProducts(products);
      setCategories(updatedCategories);
    })();
  }, []);
  // console.log(products);

  const onCategoryClick = (category) => {
    setSelectedCategories(category);
    
  };

  const filterByCategories=getProductByCategory(products,selectedCategories);
  

  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <main className="mx-auto p-8 bg-slate-200 min-h-[90vh]">
        <div className="flex gap-5 flex-wrap  mb-4">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                onClick={() => onCategoryClick(category.name)}
                className="bg-sky-600 text-sky-50 font-semibold py-1 px-2 rounded-full cursor-pointer hover:bg-blue-700" key={category.id}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div>
          {filterByCategories?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
              {filterByCategories.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-700">
              No products available
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
