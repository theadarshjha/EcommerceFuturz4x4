import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="/Website logo.webp" alt="Logo" className="h-8" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="p-2 rounded bg-gray-700" />
          <a href="#" className="hover:underline">My Account</a>
          <a href="#" className="hover:underline">Cart</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
