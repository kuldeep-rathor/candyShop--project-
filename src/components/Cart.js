// Cart.js
import React from 'react';
import { useCandyContext } from './CandyContext';
import styles from './Cart.module.css'; // Import the CSS module

function Cart() {
  const { cart, removeFromCart } = useCandyContext();

  return (
    <div className={styles['cart-container']}>
      <h2>Cart</h2>
      <ul>
        {cart.map((candy, index) => (
          <li key={index} className={styles['cart-item']}>
            <span>
              {candy.name} - ${candy.price}
            </span>
            <button onClick={() => removeFromCart(candy)}>Close</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
