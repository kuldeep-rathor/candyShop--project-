// App.js
import React from 'react';
import CandyForm from './components/CandyForm';
import CandyList from './components/CandyList';
import BuyButtons from './components/BuyButtons';
import Cart from './components/Cart';
import { CandyProvider } from './components/CandyContext';

function App() {
  return (
    <CandyProvider>
      <div>
        <h1>Candy Shop</h1>
        <CandyForm />
        <CandyList />
        <BuyButtons />
        <Cart />
      </div>
    </CandyProvider>
  );
}

export default App;
