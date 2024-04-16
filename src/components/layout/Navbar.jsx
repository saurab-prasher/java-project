// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-white font-bold'>
              Home
            </Link>
            <Link
              to='/products'
              className='ml-4 text-white hover:text-gray-300'
            >
              Browse Products
            </Link>
          </div>
          <div className='flex items-center'>
            <Link to='/checkout' className='text-white hover:text-gray-300'>
              Checkout
            </Link>
            <Link to='/cart' className='ml-4 text-white hover:text-gray-300'>
              Cart
            </Link>
            <Link to='/login' className='ml-4 text-white hover:text-gray-300'>
              Login
            </Link>
            <Link
              to='/register'
              className='ml-4 text-white hover:text-gray-300'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
