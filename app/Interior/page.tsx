// pages/interior.tsx
'use client'
import React, { useState } from 'react';

import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';
import ProductCard from '@/Components/ProductCard/productcard';
import Filter from '@/Components/Filter';
import { Product } from '@/Components/Types/product';

const Interior = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    searchQuery: '',
  });

  const products: Product[] = [
    {
      id: "1",
      name: 'Leather Seat Covers',
      description: 'Premium leather seat covers for a luxurious feel.',
      price: 199.99,
      image: '', // Ensure this path is correctly set
      imageAlt: 'Leather Seat Covers', // Added for better accessibility
      category: 'thar accessories',
      newArrival: false,
      discountPrice: undefined, // Set to undefined or remove if not applicable
      href: '/products/1' // Added href for product page link
    },
    {
      id: "2",
      name: 'Dashboard Camera',
      description: 'High-definition dashboard camera for safety and recording.',
      price: 99.99,
      image: '/images/dashboard-camera.jpg',
      imageAlt: 'Dashboard Camera', // Added for better accessibility
      category: 'thar accessories',
      newArrival: false,
      discountPrice: undefined, // Set to undefined or remove if not applicable
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
      <h1 className="text-3xl font-bold mb-4">Interior Accessories</h1>
      <div className="mb-4">
        <FilterItems subCategory="interior" />
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

export default Interior;
