// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>crud operation </h1>
    
//     </div>
//   );
// }

// export default App;
// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./Create";
import Edit from "./Edit";
import Home from "./Home";
function App() {
    return (
        <div className="App">
            <h1 className="geeks">Crud task</h1>
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit" element={<Edit />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
