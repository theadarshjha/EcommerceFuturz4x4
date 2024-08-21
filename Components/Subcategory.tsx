'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterItems from './FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';

const categories: { title: string; image: string; link: SubCategoryType }[] = [
  {
    title: 'Interior',
    image: 'https://img.freepik.com/free-photo/interior-new-luxury-sport-car_627829-661.jpg?w=996&t=st=1719911630~exp=1719912230~hmac=aea780df84857a8fc3777668429ca79b6c97e61ba8b404273bb12d4c22fccfd1',
    link: 'interior',
  },
  {
    title: 'Exterior',
    image: 'https://img.freepik.com/free-photo/3d-car-with-minimal-background_23-2150796914.jpg?t=st=1719911746~exp=1719915346~hmac=5011f312747e72459bb7e29540016b0cec28642324ae26755614377c8c955301&w=1380',
    link: 'exterior',
  },
  {
    title: 'Camping',
    image: 'https://img.freepik.com/free-photo/vertical-shot-camping-tent-near-trees-nighttime_181624-2319.jpg?t=st=1719910901~exp=1719914501~hmac=a1d43a22f32018e1976e6ef021a2c27fce3f10690a88ccbd912755b53183652e&w=360',
    link: 'camping',
  },
  {
    title: 'Alloy & Wheels',
    image: 'https://wallpaperaccess.com/full/10829477.jpg',
    link: 'alloy-wheels',
  },
  {
    title: 'Lighting',
    image: 'https://img.freepik.com/free-photo/front-car-lights-night-road_1303-17091.jpg?t=st=1719912389~exp=1719915989~hmac=c051c8fc355be4a63b23284bf6694abb2eef02fba407185261a2ac58eacb6e10&w=996',
    link: 'lighting',
  },
];

const Subcategory: React.FC = () => {
  const router = useRouter();
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategoryType>(categories[0].link);

  const handleCategoryClick = (link: SubCategoryType) => {
    setSelectedSubCategory(link);
    router.push(`/components/${link}`);
  };

  return (
    <div className="flex py-3 items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.link)}
              className="relative rounded-lg bg-gray-200 shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ width: '300px', height: '200px' }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={category.image}
                alt={category.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-2xl mx-2 my-2 font-sf-pro-icons font-bold text-white">{category.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <FilterItems subCategory={selectedSubCategory} />
      </div>
    </div>
  );
};

export default Subcategory;
