import { useParams } from 'next/navigation';
import FilterItems from '@/Components/FilterItems';
import { SubCategoryType } from '@/Components/Types/Filter';

const SubCategoryPage = () => {
  const { subCategory } = useParams();

  if (!subCategory || typeof subCategory !== 'string') {
    return <div>Loading...</div>;
  }

  // Ensure subCategory is a valid SubCategoryType
  const validSubCategory = (['interior', 'exterior', 'camping', 'alloy-wheels', 'lighting'].includes(subCategory)) ? subCategory as SubCategoryType : null;

  if (!validSubCategory) return <div>Invalid SubCategory</div>;

  return (
    <div>
      <h1>{validSubCategory}</h1>
      <FilterItems subCategory={validSubCategory} />
    </div>
  );
};

export default SubCategoryPage;
