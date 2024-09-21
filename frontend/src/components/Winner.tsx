'use client'; // Mark only the client-side part

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Restaurant {
  id: string;
  name: string;
}

interface FoodPack {
  id: string;
  name: string;
  price: number;
  restaurant: Restaurant;
  voteCount: number;
}

const Winner = () => {
  const [winner, setWinner] = useState<FoodPack | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vote/winner`);
        setWinner(response.data);
      } catch (error) {
        setError('Error fetching winner');
        console.error('Error fetching winner:', error);
      }
    };

    fetchWinner();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!winner) {
    return <div>Loading...</div>;
  }
return (
  <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Today's Winning Food Pack</h1>
    <p className="mb-2"><b>Name:</b> {winner.name}</p>
    <p className="mb-2"><b>Price:</b> ${winner.price}</p>
    <p className="mb-2"><b>Restaurant:</b> {winner.restaurant.name}</p>
    <p className="mb-2"><b>Vote Count:</b> {winner.voteCount}</p>
  </div>
);

};

export default Winner;