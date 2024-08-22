"use client";

import Subcategory from '@/Components/thar page/Subcategory';
import TharBanner from '@/Components/thar page/tharBanner';
import Head from 'next/head';
import AccessoriesSection from '@/Components/thar page/AccessoriesSection';
import ProductCard from '@/Components/ProductCard/productcard'; // Ensure this is the correct path
import products from '@/Components/data/products'; // Adjust the import path to your actual product data file

const TharAccessories = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Thar', href: '/thar' },
    { label: 'Accessories', href: null }, // Current page
  ];

  return (
    <div className='p-0 font-sf-pro-icons m-0'>
      <Head>
        <title>Thar Accessories</title>
        <meta name="description" content="Explore our range of Thar accessories to enhance your vehicle's performance and style." />
      </Head>
      <TharBanner />
      <Subcategory />
      <AccessoriesSection />

      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-1 p-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <footer className="bg-gray-900 text-white p-6 mt-8">
        <p className="text-center">© 2024 Thar Accessories. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TharAccessories;
