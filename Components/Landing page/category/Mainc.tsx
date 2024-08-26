'use client'
import Image from 'next/image';
import React from 'react';

const categories = [
  {
    title: 'THAR',
    link: '/thar-accessories/',
    image: '/4by4/thar1111-removebg-preview.png',
  },
  {
    title: 'HILUX',
    link: '/app/hilux-accessories',
    image: '/4by4/hilux111.png',
  },
  {
    title: 'JIMMY',
    link: '/app/jimmy-accessories',
    image: '/4by4/Suzuki-Jimny_After-1-removebg-preview.png',
  },
  {
    title: 'ISUZU',
    link: '/app/isuzu-accessories',
    image: '/4by4/isuzu1-removebg-preview.png',
  },
];

const MainCategory = () => {
  const backgroundImage ='/cover/MainCategory.jpg';

  return (
    <div className="w-full py-3 p-2 items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-sf-pro-icons font-extrabold bg-gradient-to-r from-yellow-400 via-black to-yellow-400 text-transparent bg-clip-text text-center mb-10">Choose Your 4x4 Car</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="relative w-full h-[200px] lg:h-[260px] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={category.image}
                alt={category.title}
              />
              <div className="absolute inset-0 flex items-start justify-start p-4">
                <h2 className="text-2xl font-sf-pro-icons font-extrabold text-white">{category.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
