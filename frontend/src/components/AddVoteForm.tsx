'use client'; // Mark only the client-side part

import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface FoodPack {
  id: string;
  name: string;
  price: number;
}

interface Restaurant {
  id: string;
  name: string;
  foodPacks: FoodPack[];
}

interface Employee {
  id: string;
  userId: string;
}

interface Vote {
  id: string;
  userId: string;
  value: number;
  employeeId: string;
  foodPackId: string;
  restaurantId: string;
  createdAt: string;
}

const VoteList = ({ initialData }: { initialData: Restaurant[] }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(initialData);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [userId, setUserId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [value, setValue] = useState(5); // Default vote value
  const [message, setMessage] = useState<string | null>(null); // State for message
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null); // State for message type

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/restaurant`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee`);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchRestaurants();
    fetchEmployees();

    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      withCredentials: true,
    });

    socket.on('newVote', (newVote: Vote) => {
      // Handle new vote event if needed
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleVote = async (foodPackId: string, restaurantId: string) => {
    const voteData = {
      userId,
      value,
      employeeId,
      foodPackId,
      restaurantId,
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/vote`, voteData);
      setMessage('Vote submitted successfully');
      setMessageType('success');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(`Error submitting vote: ${error.response.data.message}`);
      } else {
        console.error('Error submitting vote:', error);
        setMessage('Error submitting vote');
      }
      setMessageType('error');
    }
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = e.target.value;
    setUserId(selectedUserId);

    const selectedEmployee = employees.find(employee => employee.userId === selectedUserId);
    if (selectedEmployee) {
      setEmployeeId(selectedEmployee.id);
    }
  };

  return (
    <div className="p-4">
      {message && (
        <div
          className={`mb-4 p-2 rounded ${
            messageType === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID:</label>
          <select
            value={userId}
            onChange={handleUserIdChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select User</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.userId}>
                {employee.userId}
              </option>
            ))}
          </select>
        </div>
        <div style={{display:"none"}}>
          <label className="block text-sm font-medium text-gray-700">Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            readOnly
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div style={{display:"none"}}>
          <label className="block text-sm font-medium text-gray-700">Vote Value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
            <ul className="grid grid-cols-1 gap-2">
              {restaurant.foodPacks.map((foodPack) => (
                <li key={foodPack.id} className="flex justify-between items-center">
                  <p>
                    <b>Food Pack:</b> {foodPack.name} (${foodPack.price})
                  </p>
                  <button
                    onClick={() => handleVote(foodPack.id, restaurant.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Vote
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteList;