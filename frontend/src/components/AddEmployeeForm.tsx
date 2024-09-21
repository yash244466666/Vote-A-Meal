'use client'; // Mark only the client-side part


import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({ userId: '', employeeId: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log('Submitting data:', formData);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/employee`, formData);
      console.log('Response received:', response);
      if (response.status >= 200 && response.status < 300) {
        console.log('Data posted successfully:', response.data);
        setErrorMessage(''); 
        setSuccessMessage('Data posted successfully!'); 
        setFormData({ userId: '', employeeId: '' }); 
        // Automatically hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        console.log('Non-2xx response:', response);
        setErrorMessage('Failed to post data.');
        setSuccessMessage(''); 
        setFormData({ userId: '', employeeId: '' });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {

        console.error('Axios error posting data:', error);
        setErrorMessage(`Failed to post data: ${error.response?.data?.message || error.message}`);
      } else {

        console.error('Unexpected error:', error);
        setErrorMessage('An unexpected error occurred.');
      }
      setSuccessMessage(''); 
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="User Name"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
        placeholder="Employee ID"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Submit
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </form>
  );
};

export default EmployeeForm;