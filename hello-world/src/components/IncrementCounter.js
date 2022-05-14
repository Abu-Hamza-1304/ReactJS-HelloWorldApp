import React, { Component } from "react";

class IncrementCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1;
    // Warning: Do not mutate state directly. Use setState()

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value: ", this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count);
    /*
        When we click on increment in the browser, the value is 1
        but the value in the console is 0. So the console value is
        1 less than the rendered value and this is because calls to
        setState are asynchronous.
        What is happening is, console.log statement is being called
        before the state is actually set.
        Many a times in application we want to execude some code
        only after the state has been updated and to handle such a
        situation we can pass in a callback function as the second
        parameter to the setState method.
        Therefore the setState method has the two parameters;
        first parameter is the state object and the second parameter
        is the callback function.
    */
  }

  render() {
    return (
      <div>
        <div>Increment Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default IncrementCounter;
