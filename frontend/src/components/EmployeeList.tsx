'use client'; // Mark only the client-side part

import axios from 'axios';
import { useEffect, useState } from 'react';

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

    const intervalId = setInterval(fetchEmployees, 1500); // Fetch every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.userId}>
          <p><b>User ID:</b> {employee.userId}</p>
          <p><b>Employee ID:</b> {employee.employeeId}</p>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;