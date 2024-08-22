// pages/exterior.tsx
'use client'
import React, { useState } from 'react';

import Filter from '@/Components/Filter';
import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';
import ProductCard from '@/Components/ProductCard/productcard';
import { Product } from '@/Components/Types/product';

const Exterior = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    searchQuery: '',
  });

  const products: Product[] = [
    {
      id: '1',
      name: 'Bumper Guards',
      description: 'Durable bumper guards for extra protection.',
      price: 299.99,
      image: '/images/bumper-guards.jpg',
      imageAlt: 'Bumper Guards', // Added for better accessibility
      category: 'exterior',
      newArrival: false,
      discountPrice: undefined, // Set to undefined if not applicable
      href: '/products/1' // Added href for product page link
    },
    {
      id: '2',
      name: 'Roof Rack',
      description: 'Spacious roof rack for extra storage.',
      price: 149.99,
      image: '/images/roof-rack.jpg',
      imageAlt: 'Roof Rack', // Added for better accessibility
      category: 'exterior',
      newArrival: false,
      discountPrice: undefined, // Set to undefined if not applicable
      href: '/products/2' // Added href for product page link
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
      <h1 className="text-3xl font-bold mb-4">Exterior Accessories</h1>
      <div className="mb-4">
        <FilterItems subCategory="exterior" />
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

export default Exterior;
