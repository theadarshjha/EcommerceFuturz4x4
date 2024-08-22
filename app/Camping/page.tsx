// pages/camping.tsx
'use client'
import React, { useState } from 'react';

import Filter from '@/Components/Filter';
import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';
import ProductCard from '@/Components/ProductCard/productcard';

const Camping = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    searchQuery: '',
  });

  const products = [
    {
      id: '1',
      name: 'Camping Tent',
      description: 'Durable camping tent with easy setup.',
      price: 249.99,
      image: '/images/camping-tent.jpg',
      newArrival:false,
      category:'hilux accessories'
    },
    {
      id: '2',
      name: 'Sleeping Bag',
      description: 'Comfortable sleeping bag for all-weather camping.',
      price: 79.99,
      image: '/images/sleeping-bag.jpg',
      newArrival:false,
     category:'hilux accessories'
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Camping Accessories</h1>
      <div className="mb-4">
        <FilterItems subCategory="camping" />
      </div>
      <Filter filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Camping;
