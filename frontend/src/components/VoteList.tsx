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

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/restaurant');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchRestaurants();
    fetchEmployees();

    const socket = io('http://localhost:3000', {
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
      await axios.post('http://localhost:3000/vote', voteData);
      alert('Vote submitted successfully');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Error submitting vote: ${error.response.data.message}`);
      } else {
        console.error('Error submitting vote:', error);
        alert('Error submitting vote');
      }
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
    <div>
      <h1>Vote for Food Packs</h1>
      <div>
        <label>User ID:</label>
        <select value={userId} onChange={handleUserIdChange} required>
          <option value="">Select User</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.userId}>
              {employee.userId}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Employee ID:</label>
        <input type="text" value={employeeId} readOnly required />
      </div>
      <div>
        <label>Vote Value:</label>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} required />
      </div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <ul>
              {restaurant.foodPacks.map((foodPack) => (
                <li key={foodPack.id}>
                  <p><b>Food Pack:</b> {foodPack.name} (${foodPack.price})</p>
                  <button onClick={() => handleVote(foodPack.id, restaurant.id)}>Vote</button>
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