import React from 'react';
class Mampdemo2 extends React.Component{
    constructor(props){
        super(props);
        this.state={myarr:[
            {name:"sanidhya",gender:"male"},
            {name:"hetvi",gender:"female"},
            {name:"jeet",gender:"male"},
            {name:"meet",gender:"male"},
            {name:"om",gender:"male"},
            {name:"vishek",gender:"female"},
            {name:"Harsh",gender:"male"}
        ]};
    }
    render(){
        return(<>
        {this.state.myarr.length}   found
        <table border={2}>
            <thead >
                <tr>
                <th>index</th>
                <th>Name</th>
                <th>gender</th>
                </tr>
                
            </thead>
            <tbody>
                {this.state.myarr.map((v,i)=>{
                   return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{v.name}</td>
                        <td>{v.gender}</td>
                    </tr>
                   )
                    
                    
                   
                })}
            </tbody>
            </table>
        </>)
    }
}

export default Mampdemo2;