import React, { Component } from "react";

class ClassDestructure extends Component {
  render() {
    const { firstName, lastName } = this.props;
    // Syntax for destructure states
    // const {state1, state2} = this.props
    return (
      <div>
        <h2>
          My name is {firstName} {lastName}
        </h2>
        <p>This is class destructure.</p>
      </div>
    );
  }
}

export default ClassDestructure;
