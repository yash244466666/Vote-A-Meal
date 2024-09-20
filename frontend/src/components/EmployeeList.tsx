'use client'; // Mark only the client-side part

import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface Employee {
  userId: string;
  employeeId: string;
}

const EmployeeList = ({ initialData }: { initialData: Employee[] }) => {
  const [employees, setEmployees] = useState<Employee[]>(initialData);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEmployees();

    const socket = io('http://localhost:3000');

    socket.on('newEmployee', (newEmployee: Employee) => {
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {employees.map((employee) => (
        <li key={employee.userId} className="bg-gray-100 p-4 rounded shadow">
          <p className="font-bold"><b>User ID:</b> {employee.userId}</p>
          <p className="font-bold"><b>Employee ID:</b> {employee.employeeId}</p>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;