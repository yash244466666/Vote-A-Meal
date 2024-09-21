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
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Restaurant Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Food Packs</h2>
          {foodPacks.map((foodPack, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700">Food Pack Name:</label>
              <input
                type="text"
                value={foodPack.name}
                onChange={(e) => handleFoodPackChange(index, 'name', e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <label className="block text-gray-700">Price:</label>
              <input
                type="number"
                value={foodPack.price}
                onChange={(e) => handleFoodPackChange(index, 'price', parseFloat(e.target.value))}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addFoodPack}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Food Pack
          </button>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );


};

export default AddRestaurantForm;