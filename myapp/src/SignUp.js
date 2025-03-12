// import React, { useState } from 'react';


// function SignUp() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
 

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     if (!name || !password) {
//       setMessage("Please fill in both fields.");
//       return;
//     }

//     const userData = { name, password };
//     localStorage.setItem("token-info", JSON.stringify(userData));

//     setMessage("Sign Up successful!");

    
    
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Sign Up</h1>
//       <form>
//         <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Username"/>
//         <br /> <br />
//         <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" />
//         <br /> <br />
//         <button type="submit" onClick={handleSignUp} style={{ color: "green" }}>Sign Up
//         </button>
//       </form>
//       {message && <p style={{ color: "red" }}>{message}</p>}
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    const userData = { name, password };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setName('');
    setPassword('');
    navigate('/login');  // Redirect to login after successful sign up
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter Name"
        />
        <br /><br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
        <br /><br />
        <button type="submit" onClick={signup} style={{ color: 'green' }}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <button
          onClick={() => navigate('/login')}  // Navigate to login page
          style={{ color: 'blue' }}
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignUp;
