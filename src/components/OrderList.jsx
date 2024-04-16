import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8083/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          <p>Customer ID: {order.customerId}</p>
          <p>Total Price: {order.totalPrice}</p>
          <p>Transaction Details: {order.transactionDetails}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.productId}>
                Product: {item.productName} | Quantity: {item.quantity} | Price:{" "}
                {item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
