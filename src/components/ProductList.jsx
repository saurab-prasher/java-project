import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(AppContext); // Access addToCart function from context

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:8081/api/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array or appropriate error handling
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart using addToCart function from context
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2">${product.price}</p>
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
