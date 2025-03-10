import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.username === username) {
      storedData.password = newPassword;
      localStorage.setItem('userData', JSON.stringify(storedData));
      alert('Password reset successful!');
      navigate('/login');
    } else {
      alert('User not found. Please sign up first.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Forgot Password</h1>
      <form onSubmit={handlePasswordReset}>
        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
        <br /><br />
        <button type="submit">Reset Password</button>
      </form>
      <br />
      <button onClick={() => navigate('/login')}>Back to Login</button>
    </div>
  );
}

export default ForgotPassword;
