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
        const response = await axios.get('http://localhost:3000/vote/winner');
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
    <div>
      <h1>Today's Winning Food Pack</h1>
      <p><b>Name:</b> {winner.name}</p>
      <p><b>Price:</b> ${winner.price}</p>
      <p><b>Restaurant:</b> {winner.restaurant.name}</p>
      <p><b>Vote Count:</b> {winner.voteCount}</p>
    </div>
  );
};

export default Winner;