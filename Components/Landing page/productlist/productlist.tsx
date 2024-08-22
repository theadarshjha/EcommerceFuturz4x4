'use client';
import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard/productcard';
import products from '@/Components/data/products'; // Ensure the correct path to the data

const ProductList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 3));
  };

  return (
    <div className="py-10 items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <h2 className="text-3xl font-sf-pro-icons font-extrabold text-gray-900 text-center">
          HILUX 4X4 ACCESSORIES
        </h2>
        <div className="relative mt-6 flex justify-center items-center">
          {currentIndex > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-300 rounded-full p-2 z-10"
              onClick={handlePrev}
            >
              &lt;
            </button>
          )}
          <div className="overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          {currentIndex < products.length - 3 && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-300 rounded-full p-2 z-10"
              onClick={handleNext}
            >
              &gt;
            </button>
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
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
