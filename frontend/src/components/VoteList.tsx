'use client'; // Mark only the client-side part

import React, { useEffect, useState } from 'react';

// Define the interface for a vote object
interface Vote {
  id: string;
  userId: string;
  value: number;
  employeeId: string;
  foodPackId: string;
  restaurantId: string;
  createdAt: string;
}

function Votes() {
  const [votes, setVotes] = useState<Vote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
        setVotes(data);
      })
      .catch(error => {
        console.error('Error fetching votes:', error);
        setError(error.message);
      });
  }, []);

  const handleDelete = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Remove the deleted vote from the state
        setVotes(votes.filter(vote => vote.id !== id));
      })
      .catch(error => {
        console.error('Error deleting vote:', error);
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

return (
  <div className="p-4">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {votes.map(vote => (
        <li key={vote.id} className="p-4 border rounded-lg shadow-sm">
          <div className="mb-2">
            <strong className="font-semibold">User:</strong> {vote.userId}
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Vote Value:</strong> {vote.value}
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Food Pack:</strong> {vote.foodPackId}
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Restaurant:</strong> {vote.restaurantId}
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Date:</strong> {new Date(vote.createdAt).toLocaleString()}
          </div>
          <button
            onClick={() => handleDelete(vote.id)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Votes;