// import React from 'react'
// import { useState } from "react";


// function Login() {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [isLoggedin, setIsLoggedin] = useState(false);

//     const login = (e) => {
//         e.preventDefault();
//         const userData = {name,password,};
//         localStorage.setItem(
//             "token-info",
//             JSON.stringify(userData)
//         );
//         setIsLoggedin(true);
//         setName("");
//         setPassword("");
//     };

//     const logout = () => {
//         localStorage.removeItem("token-info");
//         setIsLoggedin(false);
//     };

//     return (
//         <>
//             <div style={{ textAlign: "center" }}>
//                 <h1>Log In  </h1>
//                 {!isLoggedin ? (
//                     <>
//                         <form action="">
//                             <input type="text"onChange={(e) =>setName(e.target.value)} value={name} placeholder="Enter Name"/> <br/> <br/>
//                             <input type="password" onChange={(e) => setPassword( e.target.value)} value={password} placeholder=" Enter Password" /> <br/> <br/>
//                             <button type="submit" onClick={login} style={{color:"red"}}>
//                                 Login </button>
//                         </form>
//                     </>
//                 ) : (
//                     <>
//                         <h1>User is logged in</h1>
//                         <button onClickCapture={logout} style={{color:"red"}}>
//                             logout user
//                         </button>
//                     </>
//                 )}
//             </div>
//         </>
//     );
// }




// export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("token-info"));
    if (userData) {
      setIsLoggedin(true);
    } else {
      navigate('/signup'); // If no user data, navigate to signup
    }
  }, [navigate]);

  // Handle login
  const login = (e) => {
    e.preventDefault();
    const userData = { name, password };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setName('');
    setPassword('');
  };

  // Handle logout
  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Log In</h1>
      {!isLoggedin ? (
        <>
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
            <button type="submit" onClick={login} style={{ color: 'red' }}>
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p>
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}  // Redirect to Sign Up page
              style={{ color: 'blue' }}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <h1>User is logged in</h1>
          <button onClick={logout} style={{ color: 'red' }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
