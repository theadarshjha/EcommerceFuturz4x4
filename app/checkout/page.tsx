'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/Components/contexts/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutPage: React.FC = () => {
  const { cart, totalPrice } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePayment = () => {
    if (isMounted) {
      console.log('Processing payment...');
      router.push('/order-confirmation');
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <main className="mt-10 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Checkout</h1>
        <p className="text-sm text-gray-600">Complete your purchase by providing your payment details below.</p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Summary */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between text-gray-700">
                <span>{product.name} (x{product.quantity})</span>
                <span>₹{product.discountPrice ?? product.price}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between text-gray-800 font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expDate">
                  Expiration Date
                </label>
                <input
                  id="expDate"
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handlePayment}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              PAY NOW
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>Secure Payment by XYZ Payment Gateway</p>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default CheckoutPage;
