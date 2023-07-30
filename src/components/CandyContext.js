// CandyContext.js
import React, { createContext, useState, useContext } from 'react';

const CandyContext = createContext();

export function useCandyContext() {
  return useContext(CandyContext);
}

export function CandyProvider({ children }) {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);

  const addCandy = (newCandy) => {
    setCandies([...candies, newCandy]);
  };

  const addToCart = (candy) => {
    setCart([...cart, candy]);
  };

  const removeFromCart = (candy) => {
    const updatedCart = cart.filter((item) => item !== candy);
    setCart(updatedCart);
  };

  return (
    <CandyContext.Provider value={{ candies, addCandy, cart, addToCart, removeFromCart }}>
      {children}
    </CandyContext.Provider>
  );
}
