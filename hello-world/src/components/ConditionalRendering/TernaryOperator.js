import React, { Component } from "react";

class TernaryOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>
        <h2>Welcome Abu!</h2>
        <h3>This is ternary conditional operator rendering.</h3>
      </div>
    ) : (
      <div>
        <h2>Welcome Guest.</h2>
        <h3>This is ternary conditional operator rendering.</h3>
      </div>
    );
  }
}

export default TernaryOperator;
