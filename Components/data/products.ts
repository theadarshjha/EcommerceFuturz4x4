import { Product } from '@/Components/Types/product';

const products: Product[] = [
  {
    id: '121',
    name: 'Toyota Hilux - Tornado Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹48,800 (Incl. of all taxes)',
    price: 8300,
    image: '/product/h1.png',
    imageAlt:'product',
    newArrival: true,
    discountPrice: 7500,
  },
  {
    id: '12',
    name: 'Toyota Hilux - Combat Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹21,400 (Incl. of all taxes)',
    price: 21400,
    image: '/product/c1.png',
    imageAlt:'product',
    newArrival: false,
  },
  {
    id: '32',
    name: 'Toyota Hilux - Combat Roll Bar',
    category: 'Hilux Accessories',
    description: 'MRP ₹21,400 (Incl. of all taxes)',
    price: 21400,
    discountPrice: 19200,
    image: '/product/c1.png',
    imageAlt:'product',
    newArrival: false,
  },
  // Add more products here if needed
];

export default products;
