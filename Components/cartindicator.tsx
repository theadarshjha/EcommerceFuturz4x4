// components/CartIndicator.tsx
'use client';
import React from 'react';
import { useCart } from '@/Components/contexts/CartContext';
import { ShoppingBagIcon } from '@heroicons/react/20/solid'; // Ensure you have the correct icon

const CartIndicator: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <a href="/cart" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default CartIndicator;
    