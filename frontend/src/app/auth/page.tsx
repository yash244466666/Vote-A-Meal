// src/app/auth/page.tsx
'use client'
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password });
      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('token', access_token); // Store the token in localStorage
        login(); // Update the login state
        setErrorMessage('');
        window.location.replace('/'); // Redirect to the home page or any other page
      } else {
        setErrorMessage('Login failed.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(`Login failed: ${error.response?.data?.message || error.message}`);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

export default Login;