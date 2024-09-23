'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

// Define the props for the FormInput component
interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

// Separate component for form input
const FormInput: React.FC<FormInputProps> = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password });
      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('token', access_token); // Store the token in localStorage
        login(); // Update the login state
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <FormInput
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default AuthForm;