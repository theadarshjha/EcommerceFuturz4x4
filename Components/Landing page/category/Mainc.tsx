// components/MainCategory.js
'use client'
import Image from 'next/image';
import React from 'react';

const categories = [
  {
    title: 'THAR',
    link: '/thar-accessories/',
    image: '/4by4/thar1111-removebg-preview.png', // Ensure the image path is correct and accessible
  },
  {
    title: 'HILUX',
    link: '/app/hilux-accessories', // Add the appropriate link for each category
    image: '/4by4/hilux111.png', // Ensure the image path is correct and accessible
  },
  {
    title: 'JIMMY',
    link: '/app/jimmy-accessories', // Add the appropriate link for each category
    image: '/4by4/Suzuki-Jimny_After-1-removebg-preview.png', // Ensure the image path is correct and accessible
  },
  {
    title: 'ISUZU',
    link: '/app/isuzu-accessories', // Add the appropriate link for each category
    image: '/4by4/isuzu1-removebg-preview.png', // Ensure the image path is correct and accessible
  },
  // Add more categories here if needed
];

const MainCategory = () => {
  const backgroundImage ='/cover/MainCategory.jpg'; // Replace with your actual background image path

  return (
    <div className=" w-full py-3 p-2 items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-sf-pro-icons font-extrabold bg-gradient-to-r from-yellow-400 via-black to-yellow-400 text-transparent bg-clip-text text-center mb-10">Choose Your 4x4 Car</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-x-72">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="relative lg:w-[380px] lg:h-[260px] w-[300px] h-[200px] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={category.image}
                alt={category.title}
              />
              <div className="absolute inset-0 flex">
                <h2 className="text-2xl mx-2 my-1 font-sf-pro-icons font-extrabold text-white">{category.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
