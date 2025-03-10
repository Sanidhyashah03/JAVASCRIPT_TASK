import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    //localStorage.removeItem('userData');
    navigate('/login');
  };

  const storedData = JSON.parse(localStorage.getItem('userData'));

  if (!storedData) {
    navigate('/login');
    return null;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome, {storedData.username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
