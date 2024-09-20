'use client'; // Mark only the client-side part

import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface Restaurant {
  id: string;
  name: string;
  foodPacks: { name: string; price: number }[];
}

const RestaurantList = ({ initialData }: { initialData: Restaurant[] }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(initialData);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/restaurant');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRestaurants();

    const socket = io('http://localhost:3000');

    socket.on('newRestaurant', (newRestaurant: Restaurant) => {
      setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {restaurants.map((restaurant) => (
        <li key={restaurant.id} className="border p-4 rounded shadow">
          <p className="font-bold"><b>Name:</b> {restaurant.name}</p>
          <p><b>Food Packs:</b> {restaurant.foodPacks.map(pack => `${pack.name} ($${pack.price})`).join(', ')}</p>
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;