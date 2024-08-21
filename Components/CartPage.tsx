import React, { useContext } from 'react';
import { CartContext } from '@/Components/contexts/CartContext';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: Cart context is not available</div>;
  }

  const { cart, removeFromCart } = cartContext;

  return (
    <main className="mt-10">
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                <p className="text-gray-600 mt-1">${product.price}</p>
                <button
                  onClick={() => removeFromCart(product)}
                  className="bg-red-400 text-white mt-4 px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 col-span-full">
              <h2 className="text-lg font-bold">Total: ${cart.reduce((total, product) => total + product.price, 0)}</h2>
              <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
