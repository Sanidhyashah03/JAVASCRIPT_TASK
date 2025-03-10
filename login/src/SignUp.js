import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { username, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Sign up successful! You can now log in.');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br /><br />
        <input  type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default SignUp;
