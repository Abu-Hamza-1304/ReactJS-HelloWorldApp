import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
        <p>This is a click button in class component.</p>
      </div>
    );
  }
}

export default ClassClick;
