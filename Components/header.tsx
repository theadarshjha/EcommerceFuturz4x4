import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            <a href="/" className="flex items-center">
              <img
                src="Website logo futurz.png"
                alt="Logo"
                className="h-8 w-auto sm:h-10"
              />
              <span className="ml-3">Drive Stylish</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="/shop" className="text-gray-800 hover:text-gray-600">Shop</a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <button className="text-gray-800 hover:text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405M21 21l-5.195-5.195m1.767-3.828a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </button>
            <a href="/cart" className="text-gray-800 hover:text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6H16M7 13l-3.6-9H21m-5.2 16a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm-8 0a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
