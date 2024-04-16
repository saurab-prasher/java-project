import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { token, logout, checkToken } = useContext(AuthContext);

  useEffect(() => {
    checkToken();
  }, []);
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
            {token ? (
              <>
                <a
                  href='/'
                  onClick={logout}
                  className='ml-4 text-white hover:text-gray-300'
                >
                  Logout
                </a>
                <Link
                  to='/dashboard'
                  className='ml-4 text-white hover:text-gray-300'
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='ml-4 text-white hover:text-gray-300'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='ml-4 text-white hover:text-gray-300'
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
