'use client'; 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface FoodPack {
  id: number;
  name: string;
  price: number;
}

interface Restaurant {
  id: number;
  name: string;
  foodPacks: FoodPack[];
}

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/restaurant');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/restaurant/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const handleEdit = (restaurant: Restaurant) => {
    setIsEditing(true);
    setCurrentRestaurant(restaurant);
  };

  const handleSave = async () => {
    if (currentRestaurant) {
      try {
        await axios.patch(`http://localhost:3000/restaurant/${currentRestaurant.id}`, currentRestaurant);
        setIsEditing(false);
        setCurrentRestaurant(null);
        fetchRestaurants();
      } catch (error) {
        console.error('Error updating restaurant:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    if (currentRestaurant) {
      const { name, value } = e.target;
      if (index !== undefined) {
        const updatedFoodPacks = [...currentRestaurant.foodPacks];
        updatedFoodPacks[index] = { ...updatedFoodPacks[index], [name]: value };
        setCurrentRestaurant({ ...currentRestaurant, foodPacks: updatedFoodPacks });
      } else {
        setCurrentRestaurant({ ...currentRestaurant, [name]: value });
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Restaurant List</h1> */}
      {isEditing && currentRestaurant ? (
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Edit Restaurant</h2>
          <div className="mb-2">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={currentRestaurant.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {currentRestaurant.foodPacks.map((foodPack, index) => (
            <div key={foodPack.id} className="mb-2">
              <label className="block text-gray-700">Food Pack Name:</label>
              <input
                type="text"
                name="name"
                value={foodPack.name}
                onChange={(e) => handleChange(e, index)}
                className="w-full p-2 border rounded"
              />
              <label className="block text-gray-700">Price:</label>
              <input
                type="number"
                name="price"
                value={foodPack.price}
                onChange={(e) => handleChange(e, index)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Save
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {restaurants.map(restaurant => (
            <li key={restaurant.id} className="border p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-lg">{restaurant.name}</strong>
                <div className="space-x-2">
                  <button
                    onClick={() => handleDelete(restaurant.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(restaurant)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <ul className="list-disc pl-5">
                {restaurant.foodPacks.map(foodPack => (
                  <li key={foodPack.id} className="text-gray-700">
                    {foodPack.name} - ${foodPack.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantList;