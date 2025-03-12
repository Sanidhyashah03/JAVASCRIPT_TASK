import React from "react";
class StateDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={txt1:10}
        console.log("constructior called");
    }
    updatevalue(){
        this.setState({txt1:99});

    }
    componentDidMount(){
        this.setState({txt1:50});
        console.log("component did mount called");
    }
    componentDidUpdate(){
        console.log("component did update called");
    }
    
    render(){
        console.log("render method called");
        var a=10;
        return(
            <>
            {console.log("Return called")}
            value of a is {a} <br/>
            state value is {this.state.txt1} <br/>
            <input type="button" value="pdate"onClick={this.updatevalue.bind(this)}></input>
            <input type="button" value="uickupdate"onClick={()=>this.setState({txt1:200})}/>
            
            </>
        )
    }
}

export default StateDemo;