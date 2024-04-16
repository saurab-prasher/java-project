import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4 mt-auto'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <p>&copy; 2024 Status200 Company</p>
          <div>
            <a href='#' className='text-white hover:text-gray-400 mr-4'>
              Privacy Policy
            </a>
            <a href='#' className='text-white hover:text-gray-400'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
