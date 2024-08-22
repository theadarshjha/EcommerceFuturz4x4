// pages/lighting.tsx
'use client'
import React, { useState } from 'react';

import Filter from '@/Components/Filter';
import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';
import ProductCard from '@/Components/ProductCard/productcard';

const Lighting = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    searchQuery: '',
  });

  const products = [
    {
      id: '2',
      name: 'LED Headlights',
      description: 'High-quality LED headlights for better visibility.',
      price: 299.99,
      image: '/images/led-headlights.jpg',
      newArrival:false,
      category:"thar accessories"

    },
    {
      id: '2',
      name: 'Fog Lights',
      description: 'Durable fog lights for improved driving in foggy conditions.',
      price: 149.99,
      image: '/images/fog-lights.jpg',
      newArrival:false,
      category:"thar accessories"
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
      <h1 className="text-3xl font-bold mb-4">Lighting Accessories</h1>
      <div className="mb-4">
        <FilterItems subCategory="lighting" />
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

export default Lighting;
