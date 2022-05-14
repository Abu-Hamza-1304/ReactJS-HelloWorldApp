import React, { Component } from "react";

class IfElseRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h2>Welcome Abu!</h2>
          <h3>This is if-else rendering.</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome Guest.</h2>
          <h3>This is if-else rendering.</h3>
        </div>
      );
    }
    // return (
    //   <div>
    //     <div>Welcome Abu!</div>
    //     <div>Welcome Guest.</div>
    //   </div>
    // );
  }
}

export default IfElseRendering;
