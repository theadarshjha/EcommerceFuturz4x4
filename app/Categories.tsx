// pages/category.js

import React from 'react';
import CategoryCard from '@/Components/category';

const categories = [
  { image: '/', title: 'Thar', link: '/thar' },
  { image: '/images/hilux2.jpg', title: 'Hilux', link: '/hilux' },
  { image: '/images/thar11.jpg', title: 'Jimmy', link: '/jimny' },
  { image: '/images/hilux3.jpg', title: 'Isuzu', link: '/isuzu' },
];

const CategoryPage = () => {
  return (
    <div className=" flex container mx-auto px-4">
      <h1 className="text-white text-4xl font-bold text-center mt-10">Explore Our Categories</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            image={category.image}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
