import React, { Component } from "react";

class ShortCktOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return (
    //   <div>
    //     this.state.isLoggedIn && <h2>Welcome Abu!</h2>
    //     <h3>This is short ckt or logical && operator rendering.</h3>
    //   </div>
    // );
    return this.state.isLoggedIn && <h2>Welcome Abu!</h2>
  }
}

export default ShortCktOperator;
