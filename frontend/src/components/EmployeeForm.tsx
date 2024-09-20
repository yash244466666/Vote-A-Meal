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
      const response = await axios.post('http://localhost:3000/employee', formData);
      console.log('Response received:', response);
      if (response.status >= 200 && response.status < 300) {
        console.log('Data posted successfully:', response.data);
        setErrorMessage(''); // Clear any previous error messages
        setSuccessMessage('Data posted successfully!'); // Set success message
        setFormData({ userId: '', employeeId: '' }); // Reset form data
      } else {
        console.log('Non-2xx response:', response);
        setErrorMessage('Failed to post data.');
        setSuccessMessage(''); // Clear any previous success messages
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error
        console.error('Axios error posting data:', error);
        setErrorMessage(`Failed to post data: ${error.response?.data?.message || error.message}`);
      } else {
        // Handle non-Axios error
        console.error('Unexpected error:', error);
        setErrorMessage('An unexpected error occurred.');
      }
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="User ID"
      />
      <input
        type="text"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
        placeholder="Employee ID"
      />
      <button type="submit">Submit</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};

export default EmployeeForm;