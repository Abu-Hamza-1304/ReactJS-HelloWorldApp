import React, { Component } from "react";

class DecrementCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  decrement() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1,
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Decrement Count : {this.state.count}</div>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default DecrementCounter;