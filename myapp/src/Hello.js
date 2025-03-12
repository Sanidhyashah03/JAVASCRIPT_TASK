import React from "react";
class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const {no1,no2}=this.props
        var c=parseInt(no1)+parseInt(no2);

        return(
            <>
            
            <h1>sum</h1>
            A value is {no1} <br/>
            B value is {no2} <br/>
            sum is {c}

            
            </>
        )
    }
}

export default Hello;