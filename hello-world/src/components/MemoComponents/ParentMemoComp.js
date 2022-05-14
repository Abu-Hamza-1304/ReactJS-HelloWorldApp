import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentMemoComp extends Component {
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
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentMemoComp;
