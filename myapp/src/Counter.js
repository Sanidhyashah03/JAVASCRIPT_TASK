import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:0};
    }
    incrementdata(){
        if(this.state.counter>=5){
            this.setState({msg:"sorry"})
        }
        else
        {
            this.setState({counter:this.state.counter+1,msg:''})
        }
        
    }
    decrementdata(){
        if(this.state.counter<=0){
            this.setState({msg:"sorry"})
        }
        else
        {
            this.setState({counter:this.state.counter-1,msg:''})
        }
    }
    render(){
        return(<>
        <h1>{this.state.counter}</h1>

        {/* <input type="button" value="+" onClick={()=>this.setState({counter:this.state.counter+1})}/>
        <input type="button" value="-" onClick={()=>this.setState({counter:this.state.counter-1})}/> */}
        <input type="button" value="+" onClick={this.incrementdata.bind(this)}/>
        <input type="button" value="-" onClick={this.decrementdata.bind(this)}/>
        <input type="button" value="X" onClick={()=>this.setState({counter:0})}/>
        <p style={{color:"red"}}>{this.state.msg}</p>
        </>);
    }
}

export default Counter ;