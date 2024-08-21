// components/ProductList.js
'use client'
import React, { useState } from 'react';
import ProductCard from '@/Components/productcard';

const products = [
  {
    id: '111',
    name: 'Toyota Hilux - Tornado Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹48,800 (Incl. of all taxes)',
    image: '/product/h1.png',
    price: 48800, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
  {
    id: '20',
    name: 'Toyota Hilux - Combat Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹21,600 (Incl. of all taxes)',
    image: '/product/c1.png',
    price: 21700, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
  {
    id: '3',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    price: 58300, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
  {
    id: '4',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    price: 58300, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
  {
    id: '5',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    price: 58300, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
  {
    id: '6',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    price: 99900, // Converted from string to number
    newArrival: false, // Adjust based on your requirements
  },
];

const ProductList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 1));
  };

  return (
    <div className='py-10'>
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <h2 className="text-3xl font-sf-pro-icons font-extrabold text-gray-900 text-center">HILUX 4X4 ACCESSORIES</h2>
        <div className="relative mt-6 flex justify-center items-center">
          {currentIndex > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-300 rounded-full p-2 z-10"
              onClick={handlePrev}
            >
              &lt;
            </button>
          )}
          <div className="overflow-x-auto w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          {currentIndex < products.length - 1 && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-300 rounded-full p-2 z-10"
              onClick={handleNext}
            >
              &gt;
            </button>
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: products.length }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
