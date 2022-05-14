import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  //   greetParent() {
  //     // alert("Hello" + this.state.parentName);
  //     // Since we're using ES6, we can use template literals.
  //     alert(`Hello ${this.state.parentName}`);
  //     // Since we're using this keyword in the method, we need to bind this keyword.
  //   }

  // The parameter is received as childName
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
