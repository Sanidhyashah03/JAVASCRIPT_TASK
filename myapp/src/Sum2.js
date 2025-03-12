import React from "react";
import Hello from "./Hello";
class Sum2 extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    // dosum(){

    //     const {txt1,txt2}=this.state
    //    
    //         var c=parseInt(txt1)+parseInt(txt2);
    //         this.setState({ans:"sum is "+c})
    //   }
    dosum() {
      const { txt1, txt2, value } = this.state;
      const num1 = parseInt(txt1);
      const num2 = parseInt(txt2);
      let result = "";
       if (value == "+") {
          result = "sum is " + (num1 + num2);
      } else if (value == "-") {
          result = "sub is " + (num1 - num2);
      } else if (value =="*") {
          result = "mul is " + (num1 * num2);
      } else if (value =="/") {
          result = "div is " + (num1 / num2);
          
      }
    this.setState({ ans: result });
  }
    doupdate(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
      return (
        <div>
            <h1>Calculator</h1> <br/>
            no1:<input type="text" name="txt1" onChange={this.doupdate.bind(this)}/>
            no2:<input tyope="text" name="txt2" onChange={this.doupdate.bind(this)}/> <br/>
            
            <input type="button" onClick={() => this.setState({ value: "+" }, this.dosum.bind(this))} value="+" />
            <input type="button" onClick={() => this.setState({ value: "-" }, this.dosum.bind(this))} value="-" />
            <input type="button" onClick={() => this.setState({ value: "*" }, this.dosum.bind(this))} value="*" />
            <input type="button" onClick={() => this.setState({ value: "/" }, this.dosum.bind(this))} value="/" />
            {this.state.ans}
          

          {/* props passing */}
          
            {/* <Hello no1="11" no2="20"/>
            <Hello no1={this.state.txt1} no2={this.state.txt2}/> */}

        </div>
      )
    }
}

export default Sum2;