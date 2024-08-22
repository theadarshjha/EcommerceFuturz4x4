// pages/alloy-wheels.tsx
'use client'
import React, { useState } from 'react';

import Filter from '@/Components/Filter';
import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';
import { Product } from '@/Components/Types/product'; // Ensure you import the Product type
import ProductCard from '@/Components/ProductCard/productcard';

const AlloyWheels = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    searchQuery: '',
  });

  const products: Product[] = [
    {
      id: '1', // Ensure id is a string
      name: '17" Alloy Wheels',
      description: 'Stylish 17-inch alloy wheels for better performance.',
      price: 699,
      image: '/images/alloy-wheels-17.jpg', // Changed imageUrl to image
      imageAlt: '17 inch Alloy Wheels', // Added imageAlt for better accessibility
      category: 'Alloy Wheels', // Added category
      discountPrice: 699, // Added discountPrice
      newArrival: false, // Added newArrival
      href: '/products/1' // Added href for product page link
    },
    {
      id: '2',
      name: 'Wheel Covers',
      description: 'Protective wheel covers for added durability.',
      price: 49,
      image: '/images/wheel-covers.jpg',
      imageAlt: 'Wheel Covers', // Added imageAlt for better accessibility
      category: 'Alloy Wheels',
      discountPrice: 39.99,
      newArrival: false,
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
      <h1 className="text-3xl font-bold mb-4">Alloy Wheels</h1>
      <div className="mb-4">
        <FilterItems subCategory="alloy-wheels" />
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

export default AlloyWheels;
