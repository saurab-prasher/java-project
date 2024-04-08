import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageId: "",
    stockAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", product); // Adjust the API URL as needed
    // Optionally reset form or give user feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={product.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='description'
        placeholder='Description'
        value={product.description}
        onChange={handleChange}
      />
      <input
        type='text'
        name='price'
        placeholder='Price'
        value={product.price}
        onChange={handleChange}
      />
      <input type='submit' value='Add Product' />
    </form>
  );
};

export default AddProductForm;
