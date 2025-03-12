import React from "react";
import "./Mystyle.css";
// function Home() {
//     return (<>
//     <h1>Home</h1>
//     </>  );
// }

class Home extends React.Component{
    render(){
        var mycolor={
            backgroundColor:"red",
            color:"white"
        }


        return(<div>
            {/* internal css */}
            <h1 style={mycolor}>Homwe</h1>
            {/* inline css */}
            <h2 style={{backgroundColor:"Pink"}}> HIIIIIIIIIII</h2>

            {/* external css */}
            <h3 className="mytext">Helloooooooooooooooo</h3>
        </div>)
    }
}

export default Home;