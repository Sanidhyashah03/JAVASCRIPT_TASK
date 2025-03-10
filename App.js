// import './App.css';
// import Display from './Display';
// import Fetchapi from './Fetchapi';
// import Fetchapi2 from './Fetchapi2';
// import Add from './Add';
// function App() {
//   return (
//     <div className="App">
      
//       <Add></Add>
//       <Display></Display>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing
import './App.css';
import Display from './Display'; // Display component for listing items
import Add from './Add'; // Add component for adding items
import Edit from './Edit';

function App() {
  return (
    <Router> {/* Wrap your app in BrowserRouter for routing */}
      <div className="App">
        <Add /> {/* Render Add component */}
        <Display /> {/* Render Display component */}
        <Edit></Edit>
      </div>
    </Router>
  );
}

export default App;
