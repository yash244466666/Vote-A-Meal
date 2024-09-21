'use client'; // Mark only the client-side part

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Employee interface
interface Employee {
  id: string;
  userId: string;
  employeeId: string;
  // Add other fields as necessary
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    // Fetch employee data
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee`)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee data!', error);
      });
  }, []);

  const handleDelete = (id: string) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/employee/${id}`)
      .then(response => {
        // Remove the deleted employee from the state
        setEmployees(employees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the employee!', error);
      });
  };

  const handleEdit = (employee: Employee) => {
    setIsEditing(true);
    setCurrentEmployee(employee);
  };

  const handleSave = async () => {
    if (currentEmployee) {
      try {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/employee/${currentEmployee.id}`, currentEmployee);
        setIsEditing(false);
        setCurrentEmployee(null);
        // Fetch updated employees list or update state directly
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee`)
          .then(response => {
            setEmployees(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the employee data!', error);
          });
      } catch (error) {
        console.error('There was an error updating the employee!', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentEmployee) {
      const { name, value } = e.target;
      setCurrentEmployee({ ...currentEmployee, [name]: value });
    }
  };

return (
  <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    {isEditing && currentEmployee ? (
      <div className="mb-4 p-4 sm:p-6 lg:p-8 border rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Edit Employee</h2>
        <div className="mb-2">
          <label className="block text-gray-700">User ID:</label>
          <input
            type="text"
            name="userId"
            value={currentEmployee.userId}
            onChange={handleChange}
            className="w-full sm:w-3/4 lg:w-1/2 p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            value={currentEmployee.employeeId}
            onChange={handleChange}
            className="w-full sm:w-3/4 lg:w-1/2 p-2 border rounded"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    ) : (
      <ul className="space-y-4">
        {employees.map(employee => (
          <li key={employee.id} className="border p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div className="text-lg sm:text-xl lg:text-2xl">
                <span className="font-semibold">User Name:</span> {employee.userId} <br />
                <span className="font-semibold">Employee ID:</span> {employee.employeeId}
              </div>
              <div className="space-x-2 mt-2 sm:mt-0">
              <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleEdit(employee)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

};

export default EmployeeList;