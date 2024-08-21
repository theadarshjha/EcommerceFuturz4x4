import React, { useState, useEffect } from 'react';
import ProductCard from '@/Components/productcard'; // Import ProductCard component
import Filter from '@/Components/thar page/filter';   

function SubCategoryPage({ subcategoryId }) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: subcategoryId, // Initial filter based on subcategory
    priceRange: [0, Infinity],
  });

  useEffect(() => {
    // Fetch products based on filters
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?category=${filters.category}&minPrice=${filters.priceRange[0]}&maxPrice=${filters.priceRange[1]}`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      {/* Filter component */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          {/* Category filter (if needed) */}
        </div>
        <div>
          {/* Price range filter */}
          <label htmlFor="price-range">Price Range:</label>
          <input
            type="range"
            id="price-range"
            min="0"
            max="1000" // Adjust max price based on your data
            value={filters.priceRange[0]}
            onChange={(e) => handleFilterChange('priceRange', [e.target.value, filters.priceRange[1]])}
          />
          <input
            type="range"
            id="price-range-end"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], e.target.value])}
          />
        </div>
        {/* Other filters */}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}   
 />
        ))}
      </div>
    </div>   

  );
}

export default SubCategoryPage;