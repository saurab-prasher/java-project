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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
            <p className="mb-2">
              <span className="font-semibold">Customer ID:</span>{" "}
              {order.customerId}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Total Price:</span> $
              {order.totalPrice.toFixed(2)}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Transaction Details:</span>{" "}
              {order.transactionDetails}
            </p>
            <ul>
              {order.items.map((item) => (
                <li key={item.productId} className="mb-2">
                  Product: {item.productName} | Quantity: {item.quantity} |
                  Price: ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
