'use client'

import { useState } from 'react';
export default function PostData() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (error:any) => {
    error.preventDefault();
    setStatus('Sending...');

    const data = { email, password, name };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Data sent successfully');
      } else {
        setStatus('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending data');
    }
  };

  return (
    <div>
      <h1>Post Email and password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
