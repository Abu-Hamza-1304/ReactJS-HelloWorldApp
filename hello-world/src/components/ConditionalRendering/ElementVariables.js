import React, { Component } from "react";

class ElementVariables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <h2>Welcome Abu!</h2>;
    } else {
      message = <h2>Welcome Guest.</h2>;
    }
    return (
      <div>
        <div>{message}</div>
        <h3>This is element variable rendering.</h3>
      </div>
    );
  }
}

export default ElementVariables;
