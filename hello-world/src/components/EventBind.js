import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     // To change set, we use this.setState
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     console.log(this);
  //     /*
  //         this keyword is undefined in event handler and that is the reason
  //         event binding is necessary in react class components.
  //     */
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
        <p>This is Binding Event Handler concept.</p>
      </div>
    );
  }
}

export default EventBind;
