import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const token = localStorage.getItem("token");

      // Set the Authorization header with the token
      const response = await axios.get("http://localhost:8082/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array or appropriate error handling
    }
  }
  return (
    <div>
      <h1 className='text-3xl p-4 px-8'>
        The Products can only be access after logging in
      </h1>

      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-semibold mb-4'>Products</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <li
              key={product.id}
              className='bg-white shadow-md p-4 rounded-md flex flex-col justify-between'
            >
              <div>
                <h3 className='text-xl font-semibold'>{product.name}</h3>
                <p className='mt-2'>${product.price}</p>
              </div>
              <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
