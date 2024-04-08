import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    try {
      const response = await axios.get("/api/products");
      console.log(response.data); // Access the data property
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array or appropriate error handling
    }
  }
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
