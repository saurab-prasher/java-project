import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart } = useContext(AppContext); // Access cart state from context

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-semibold mb-4'>Shopping Cart</h2>
      <ul className='divide-y divide-gray-200'>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className='py-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <p className='text-gray-500'>${item.price}</p>
                </div>
                <button className='text-red-500 hover:text-red-700 focus:outline-none'>
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className='py-4'>Your cart is empty.</li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
