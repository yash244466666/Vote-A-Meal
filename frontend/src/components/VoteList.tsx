'use client'; // Mark only the client-side part

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import withAuth from '@/hoc/withAuth'; // Import the withAuth HOC

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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentVote, setCurrentVote] = useState<Vote | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please log in again.');
      return;
    }
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vote`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
      },
    })
      .then(response => {
        setVotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching votes:', error);
        setError(error.message);
      });
  }, []);

  const handleDelete = (id: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in again.');
      return;
    }
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/vote/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
      },
    })
      .then(response => {
        // Remove the deleted vote from the state
        setVotes(votes.filter(vote => vote.id !== id));
      })
      .catch(error => {
        console.error('Error deleting vote:', error);
        setError(error.message);
      });
  };

  const handleEdit = (vote: Vote) => {
    setIsEditing(true);
    setCurrentVote(vote);
  };

  const handleUpdate = () => {
    if (!currentVote) return;

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in again.');
      return;
    }

    axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/vote/${currentVote.id}`, currentVote, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
      },
    })
      .then(response => {
        // Update the vote in the state
        setVotes(votes.map(vote => vote.id === currentVote.id ? currentVote : vote));
        setIsEditing(false);
        setCurrentVote(null);
      })
      .catch(error => {
        console.error('Error updating vote:', error);
        setError(error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentVote) return;

    const { name, value } = e.target;
    setCurrentVote({ ...currentVote, [name]: value });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {isEditing && currentVote ? (
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Edit Vote</h2>
          <div className="mb-2">
            <label className="block text-gray-700">User ID:</label>
            <input
              type="text"
              name="userId"
              value={currentVote.userId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Vote Value:</label>
            <input
              type="number"
              name="value"
              value={currentVote.value}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={currentVote.employeeId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Food Pack ID:</label>
            <input
              type="text"
              name="foodPackId"
              value={currentVote.foodPackId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Restaurant ID:</label>
            <input
              type="text"
              name="restaurantId"
              value={currentVote.restaurantId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
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
                className="m-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(vote)}
                className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default withAuth(Votes); // Wrap the component with withAuth HOC