// components/SeasonSale.js
'use client'
import React from 'react';
import ProductCard from '@/Components/productcard';

const SeasonSale = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] bg-slate-400 py-6">
      <h1 className="w-full text-center font-sf-pro-icons font-bold text-3xl bg-yellow-400 py-2">SEASON SALE '24</h1>
      <div className="flex justify-center mt-6">
        <ProductCard 
          product={{
            id: '10',
            name: 'Toyota Hilux - Tornado Roll Bar',
            image: '/product/h1.png',
            category: 'Hilux Accessories',
            description: 'MRP ₹48,800 (Incl. of all taxes)',
            price: '48,800',
            newArrival:false
          }} 
        />
      </div>
    </div>
  );
};

export default SeasonSale;
