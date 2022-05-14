import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentPureComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abu",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abu",
      });
    }, 3000);
  }

  render() {
    console.log("**********Parent Component Render**********");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentPureComp;
