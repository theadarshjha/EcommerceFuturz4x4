// components/ProductList.js
'use client'
import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard/productcard';

const products = [
  {
    id: '111',
    name: 'Toyota Hilux - Tornado Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹48,800 (Incl. of all taxes)',
    image: '/product/h1.png',
    imageAlt: 'Toyota Hilux - Tornado Roll Bar',
    href: '/products/111', // Assuming this is the link to the product page
    price: 48800,
    newArrival: false,
  },
  {
    id: '20',
    name: 'Toyota Hilux - Combat Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹21,600 (Incl. of all taxes)',
    image: '/product/c1.png',
    imageAlt: 'Toyota Hilux - Combat Roll Bar',
    href: '/products/20', // Assuming this is the link to the product page
    price: 21700,
    newArrival: false,
  },
  {
    id: '3',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    imageAlt: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    href: '/products/3', // Assuming this is the link to the product page
    price: 58300,
    newArrival: false,
  },
  {
    id: '4',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    imageAlt: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    href: '/products/4', // Assuming this is the link to the product page
    price: 58300,
    newArrival: false,
  },
  {
    id: '5',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    imageAlt: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    href: '/products/5', // Assuming this is the link to the product page
    price: 58300,
    newArrival: false,
  },
  {
    id: '6',
    name: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    category: 'Hilux Accessories',
    description: 'MRP ₹58,300 (Incl. of all taxes)',
    image: '/product/pro1-removebg-preview.png',
    imageAlt: 'Toyota Hilux - Alfa Roof Rack with Fenders',
    href: '/products/6', // Assuming this is the link to the product page
    price: 99900,
    newArrival: false,
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
