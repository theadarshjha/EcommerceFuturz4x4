import { useState } from 'react';
import { Product } from './Types/product';

export default function ProductPage({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: { target: { value: any; }; }) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    // Add product to cart logic here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-lg font-bold mb-4">Price: ${product.price}</p>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
          className="border px-2 py-1"
        />
      </div>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2">
        Add to Cart
      </button>
    </div>
  );
}   


