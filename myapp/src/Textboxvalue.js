import React from "react";

class Textboxvalue extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }
    updatevale(e){
        this.setState({txt1:e.target.value});
    }
    updatedata(e){
        this.setState({[e.target.name]:e.target.value});
    }
    


    
    render() {
      return (
        <div>
          Name:<input type="text" onChange={this.updatevale.bind(this)}/> <br></br>
          Name:<input type="text" onChange={(e)=>this.setState({txt1:e.target.value})}/>
          {this.state.txt1}

          <hr></hr>

          No1:<input type="text" name="txt11" onChange={this.updatedata.bind(this)}></input>
          No2:<input type="text" name="txt11" onChange={this.updatedata.bind(this)}></input>
        </div>
      )
    }
}

export default Textboxvalue;