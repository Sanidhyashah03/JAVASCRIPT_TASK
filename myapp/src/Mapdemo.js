import React from 'react';
class Mapdemo extends React.Component{
    constructor(props){
        super(props);
        this.state={myarr:[22,22,21,2]};
    }
    
    render() {
       
      return (
        <div>
          {this.state.myarr.map((v,i)=>{
            return(<ul>
                <li>{v}</li>
            </ul>)
        })}
        </div>
      )
    }
}

export default Mapdemo;