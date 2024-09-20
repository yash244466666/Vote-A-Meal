'use client'; // Mark only the client-side part

import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurantForm = () => {
  const [name, setName] = useState('');
  const [foodPacks, setFoodPacks] = useState([{ name: '', price: 0 }]);

  const handleFoodPackChange = (index: number, field: string, value: string | number) => {
    const newFoodPacks = [...foodPacks];
    newFoodPacks[index] = { ...newFoodPacks[index], [field]: value };
    setFoodPacks(newFoodPacks);
  };

  const addFoodPack = () => {
    setFoodPacks([...foodPacks, { name: '', price: 0 }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/restaurant', { name, foodPacks });
      alert('Restaurant added successfully');
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Error adding restaurant');
    }
  };

  return (
    <div>
      <h1>Add New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Restaurant Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <h2>Food Packs</h2>
          {foodPacks.map((foodPack, index) => (
            <div key={index}>
              <label>Food Pack Name:</label>
              <input
                type="text"
                value={foodPack.name}
                onChange={(e) => handleFoodPackChange(index, 'name', e.target.value)}
                required
              />
              <label>Price:</label>
              <input
                type="number"
                value={foodPack.price}
                onChange={(e) => handleFoodPackChange(index, 'price', parseFloat(e.target.value))}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addFoodPack}>Add Food Pack</button>
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;