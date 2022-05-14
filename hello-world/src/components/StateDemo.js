import React, { Component } from "react";

class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to world of React!",
    };
  }

  changeMessage() {
    this.setState({
      message: "Hello React Developer!",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    );
  }
}

export default StateDemo;
