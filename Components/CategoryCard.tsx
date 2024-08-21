import React from 'react';

const Categories = () => {
  return (
    <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex bg-gray-200 w-[500px] h-[300px] m-10 text-black justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/image.png')" }}>
        Case 1
      </div>
      <div className="bg-gray-300 p-4 text-center">
        Category 2
      </div>
      <div className="bg-gray-200 p-4 text-center">
        Category 3
      </div>
      <div className="bg-gray-300 p-4 text-center">
        Category 4
      </div>
    </div>
  );
};

export default Categories;
