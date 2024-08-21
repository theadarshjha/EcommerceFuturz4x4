// components/ProductCard.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/Components/contexts/CartContext'; // Ensure the correct path

type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  price: string;
  newArrival?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      className="relative flex flex-col items-center bg-gray-100 p-3 rounded-lg shadow-lg m-2 min-w-[200px] max-w-xs transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      {product.newArrival && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          New Arrival
        </div>
      )}
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col flex-grow items-center justify-between mt-3 w-full">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-indigo-500">{product.category}</h3>
          <h2 className="text-md font-medium text-gray-900">{product.name}</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      </div>
      <div className="w-full mt-3">
        <button
          className="w-full px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-700"
          onClick={handleAddToCart}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
