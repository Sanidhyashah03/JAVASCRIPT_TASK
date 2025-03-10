import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.username === username && storedData.password === password) {
      alert('Logged in successfully!');
      navigate('/dashboard'); 
    } else {
      alert('Invalid credentials. Please sign up or try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <br />
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <br />
      <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
    </div>
  );
}

export default Login;
