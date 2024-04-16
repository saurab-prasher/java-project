import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [customerId, setCustomerId] = useState("");
  const [transactionDetails, setTransactionDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customerId,
      transactionDetails,
      items: [
        {
          productId: "product1", // Example product ID
          quantity: 2,
        },
        {
          productId: "product2", // Example product ID
          quantity: 1,
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/orders",
        orderData
      ); // Replace with your order service endpoint
      console.log("Order placed:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="transactionDetails">Transaction Details:</label>
          <textarea
            id="transactionDetails"
            value={transactionDetails}
            onChange={(e) => setTransactionDetails(e.target.value)}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
