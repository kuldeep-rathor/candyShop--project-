// BuyButtons.js
import React from 'react';
import { useCandyContext } from './CandyContext';

function BuyButtons() {
  const { addCandy, addToCart } = useCandyContext();

  const handleBuyOne = () => {
    const newCandy = {
      name: 'Candy One',
      description: 'This is Candy One',
      price: 1.0,
    };
    addCandy(newCandy);
    addToCart(newCandy);
  };

  const handleBuyTwo = () => {
    const newCandy = {
      name: 'Candy Two',
      description: 'This is Candy Two',
      price: 1.5,
    };
    addCandy(newCandy);
    addToCart(newCandy);
  };

  const handleBuyThree = () => {
    const newCandy = {
      name: 'Candy Three',
      description: 'This is Candy Three',
      price: 2.0,
    };
    addCandy(newCandy);
    addToCart(newCandy);
  };

  return (
    <div>
      <h2>Buy Candies</h2>
      <button onClick={handleBuyOne}>Buy One</button>
      <button onClick={handleBuyTwo}>Buy Two</button>
      <button onClick={handleBuyThree}>Buy Three</button>
    </div>
  );
}

export default BuyButtons;
