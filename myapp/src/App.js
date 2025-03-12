import './App.css';
import React from 'react';
import Home from './Home';

import Header from './Header';
import EventDemo from './EventDemo';

import { Link } from 'react-router-dom';
import About from './About';
import Classdemo from './Classdemo';
import Counter from './Counter';
import StateDemo from './StateDemo';
import Textboxvalue from './Textboxvalue';
import Sum2 from './Sum2';
import Validation from './Validation';
import Counterlocalstore from './Counterlocalstore';
import Democondition from './Democondition';
import CounterHooks from './CounterHooks';
import Sumhooks from './Sumhooks';
import Userhooks from './userhooks';
import Login from './Login';
import SignUp from './SignUp';
import Mapdemo from './Mapdemo';
import Mampdemo2 from './Mapdemo2';
import Todo from './Todo';
// function component
// function App() {
//   var a=10;
//   var b=9;
//   var c=a+b;
//   var d=111;
//   var e=111;
//   var msg="";
//   if(c>19){
//     msg="sum is greater than 19";
//   }
//   else
//   {
//     msg="sum is less than 19";
//   }
//   return (
//     <div>
      
//       <h1>sanidhya shah is a billionaire</h1>
//       <h2>ans is {c}</h2>
//       <h2>{20+22+22}</h2>
//       <h2>{d+e}</h2>
//       {msg}
//     </div>
//   );
// }


// class App extends React.Component{
//   render(){

//     var a=10;
//     var b=20;
//     return(
//       <>
//       <h1>ans is {a+b}</h1>
//       <Home></Home>
//       <Header></Header>
//       </>
//     );
//   }

function App() {
  

  return ( <div>


  {/* <Router>
  <Link to={"/About"}>About</Link>
 
    <Routes>
     <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Routes>
  </Router>
   */}
   {/* <EventDemo></EventDemo> */}
    {/* <Classdemo/> */}
    {/* <Counter></Counter> */}
    {/* <StateDemo></StateDemo> */}
    {/* <Textboxvalue></Textboxvalue> */}
    {/* <Sum2></Sum2> */}
    {/* <Counterlocalstore></Counterlocalstore> */}
    {/* <Validation></Validation> */}
    {/* <Democondition></Democondition> */}
    {/* <CounterHooks></CounterHooks> */}
    
    {/* <Sumhooks></Sumhooks> */}
    {/* <Userhooks></Userhooks> */}
    {/* <Mapdemo></Mapdemo> */}
    {/* <Mampdemo2></Mampdemo2> */}
    <Todo></Todo>
  </div> );
}


export default App;