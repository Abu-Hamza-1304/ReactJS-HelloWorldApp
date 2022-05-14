import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      //   <div>
      //     <span onMouseOver={this.incrementCount}>
      //       {this.props.name} Hovered {count} times
      //     </span>
      //   </div>
      <div>
        <span onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </span>
      </div>
    );
  }
}

export default withCounter(HoverCounter);

/*
    While exporting, I'll call the UpdatedComponent function passing
    in the ClickCounter component.

    So what we are doing here is instead of exporting the ClickCounter
    or the HoverCounter component, we export the HOC.
*/
