'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FoodPack {
  name: string;
  price: number;
  restaurant: Restaurant;
  voteCount: number;
}

interface Restaurant {
  name: string;
}

interface ErrorState {
  message: string;
  details?: string;
}

const Winner = () => {
  const [winner, setWinner] = useState<FoodPack | null>(null);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vote/winner`);
        setWinner(response.data);
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          setError({
            message: 'Error fetching winner',
            details: err.response?.data?.message || err.message,
          });
        } else {
          // Generic error handling
          setError({
            message: 'An unexpected error occurred',
            details: err.message,
          });
        }
        console.error('Error fetching winner:', err);
      }
    };

    fetchWinner();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 border border-red-400 rounded">
        <p className="font-bold">{error.message}</p>
        {error.details && <p>Details: {error.details}</p>}
      </div>
    );
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
