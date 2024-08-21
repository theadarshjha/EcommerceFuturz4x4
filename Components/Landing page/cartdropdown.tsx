// Components/CartDropdown.tsx
import React from 'react';
import { useCart } from '@/Components/contexts/CartContext';

const CartDropdown: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-dropdown">
      <h4>Your Cart</h4>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h5>{item.name}</h5>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDropdown;
