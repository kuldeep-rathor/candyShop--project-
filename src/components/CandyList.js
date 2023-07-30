// CandyList.js
import React from 'react';
import { useCandyContext } from './CandyContext';

function CandyList() {
  const { candies } = useCandyContext();

  return (
    <div>
      <h2>List of Candies</h2>
      <ul>
        {candies.map((candy, index) => (
          <li key={index}>
            {candy.name} - {candy.price} - {candy.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandyList;
