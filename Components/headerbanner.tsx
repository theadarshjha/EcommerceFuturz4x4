"use client"
import React, { use, useState } from 'react';
import Link from 'next/link';

const HeaderBanner = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="w-full p-0 m-0 ">
      <div className="bg-gray-300 p-2 pr-6">
        <div className="container mx-auto gap-3 flex justify-end items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png" alt="Facebook" className="w-6 h-6"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" alt="Twitter" className="w-6 h-6"/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram" className="w-6 h-6"/>
          </a>
          <span className="text-white">Call us: +1234567890</span>
        </div>
      </div>

      <div className="bg-white shadow-md py-2">
        <div className="container mx-auto flex justify-between items-center px-8">
          <Link href="/">
            <img src="/website logo.webp" alt="Logo" className="w-26 h-6 cursor-pointer"/>
          </Link>
          <nav className="hidden md:flex font-serif text-xl gap-5 flex-grow justify-center space-x-8">
            <Link href="/menu1" className="text-black hover:text-yellow-300">
              Brands
            </Link>
            <Link href="/menu2" className="text-black hover:text-yellow-300">
              Cars
            </Link>
            <Link href="/menu3" className="text-black hover:text-yellow-300">
              Contact us
            </Link>
            <Link href="/menu4" className="text-black hover:text-yellow-300">
              more
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-9 py-2 border text-black font-sans border-gray-300  rounded-xl focus:outline-none focus:border-gray-500"
              />
              <button className="absolute right-0 top-0 mt-2 mr-2">
                <img src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-60.png" alt="Search" className="w-6 h-6"/>
              </button>
            </div>
            <button className="text-gray-700 hover:text-gray-900">
              <img src="https://cdn2.iconfinder.com/data/icons/miscellaneous-41/45/Asset_21-64.png" alt="Add to Cart" className="w-6 h-6"/>
            </button>
            <Link href="/account">
              {/* Changed to a button with the icon */}
              <button className="pt-2 text-gray-700 hover:text-gray-900">
                <img src="https://cdn4.iconfinder.com/data/icons/hand-drawn-business-ui-pack/65/My_Account-64.png" alt="My Account" className="w-6 h-6 "/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
