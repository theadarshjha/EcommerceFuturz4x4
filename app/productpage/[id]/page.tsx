'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import products from '@/Components/data/products';
import { Rating } from '@mui/material';
import { Product } from '@/Components/Types/product';
import { useCart } from '@/Components/contexts/CartContext'; // Import your Cart context

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product: Product) => product.id === id);
  const { addToCart } = useCart(); // Access the addToCart function from the Cart context

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1); // State for quantity

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found</div>;
  }

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (product) {
      // Add product to cart with the specified quantity
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li><a href="/" className="text-sm font-medium text-gray-900">Home</a></li>
              <li className="text-gray-500"><span className="mx-2">/</span>Category</li>
              <li className="text-gray-500"><span className="mx-2">/</span>{product.name}</li>
            </ol>
          </nav>

          {/* Product Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
            {/* Image gallery */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-extrabold lg:text-xl font-semibold text-black">{product.name}</h1>
              </div>

              {/* Price */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <div className="flex space-x-5 items-center text-lg lg:text-xl mt-6">
                  <p className="font-semibold text-2xl text-black">₹{product.price}</p>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <div className="flex items-center space-x-5">
                    <Rating name="read-only" value={4.5} readOnly />
                    <p className="opacity-50 text-sm">54562 Ratings</p>
                    <p className="ml-3 text-sm font-medium cursor-pointer text-indigo-800 hover:text-indigo-600">3879 Reviews</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-10">
                  <label htmlFor="quantity" className="block text-xl font-semibold text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity} // Set the value to the quantity state
                    onChange={(e) => setQuantity(Number(e.target.value))} // Update the quantity state
                    min="1"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                {/* Add to Cart Button */}
                <div className="w-full mt-3">
                  <button
                    className="w-full px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-700"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default link behavior
                      handleAddToCart(); // Call the add to cart function
                    }}
                  >
                    Shop Now
                  </button>
                </div> 
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <div className="mt-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium ${activeTab === 'description' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium ${activeTab === 'shipping' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Shipping & Returns
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            <div className="mt-8">
              {activeTab === 'description' && (
                <div id="description">
                  <h3 className="text-xl font-bold mb-4">Product Description</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div id="shipping">
                  <h3 className="text-xl font-bold mb-4">Shipping & Returns</h3>
                  <p className="text-gray-700">Details about shipping and return policies.</p>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div id="reviews">
                  <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-700 mb-2"><span className="font-bold">John Doe</span> - <span className="text-sm text-gray-500">July 25, 2024</span></p>
                      <p className="text-gray-700">Great product! Really satisfied with the quality and results.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-700 mb-2"><span className="font-bold">Jane Smith</span> - <span className="text-sm text-gray-500">July 20, 2024</span></p>
                      <p className="text-gray-700">The product exceeded my expectations. Highly recommend!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
