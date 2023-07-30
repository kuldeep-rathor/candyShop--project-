// CandyForm.js
import React, { useState } from 'react';
import { useCandyContext } from './CandyContext';

function CandyForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { addCandy } = useCandyContext();

  const handleAddCandy = () => {
    const newCandy = {
      name,
      description,
      price: parseFloat(price),
    };
    addCandy(newCandy);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Candy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddCandy}>Add Candy</button>
    </div>
  );
}

export default CandyForm;
