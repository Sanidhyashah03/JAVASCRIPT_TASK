import React from "react";

class Counterlocalstore extends React.Component {
  constructor(props) {
    super(props);
   
    const savedCounter = localStorage.getItem("counter");
    this.state = {
      counter: savedCounter ? parseInt(savedCounter) : 0, msg: '',
    };
  }

  incrementdata() {
    if (this.state.counter >= 5) {
      this.setState({ msg: "sorry" });
    } else {
      this.setState(
        { counter: this.state.counter + 1, msg: "" },
        () => {localStorage.setItem("counter", this.state.counter);}
      );
    }
  }

  decrementdata() {
    if (this.state.counter <= 0) {
      this.setState({ msg: "sorry" });
    } else {
      this.setState(
        { counter: this.state.counter - 1, msg: "" },
        () => {localStorage.setItem("counter", this.state.counter);
        }
      );
    }
  }

  resetCounter() {
    this.setState(
      { counter: 0, msg: "" },
      () => {localStorage.setItem("counter", 0);
      }
    );
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <input type="button" value="+" onClick={this.incrementdata.bind(this)}/>
        <input type="button" value="-" onClick={this.decrementdata.bind(this)}  />
        <input type="button" value="X" onClick={this.resetCounter.bind(this)} />
        <p style={{ color: "red" }}>{this.state.msg}</p>
      </>
    );
  }
}

export default Counterlocalstore;
