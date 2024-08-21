// components/FilterItems.tsx
import React from 'react';
import { filters, FiltersType } from '@/Components/data/filter';
import { SubCategoryType } from '@/Components/Types/Filter';

type FilterItemsProps = {
  subCategory: SubCategoryType;
};

const FilterItems: React.FC<FilterItemsProps> = ({ subCategory }) => {
  const filterItems = filters[subCategory] || [];

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Filters for {subCategory}</h2>
      <ul className="space-y-1">
        {filterItems.map((item) => (
          <li key={item} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItems;
    