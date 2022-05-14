import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  /*
    "createRef" Approach
    1. With createRef approach, we create a reference using React.createRef()
    2. In createRef approach, we attach the reference to an element using the Ref
    prop and assigning the property.
    3. Finally, in createRef approach, the elements can be accessed using
    this.referencevariable.current.

    "callbackRef" Approach
    1. With callbackRef approach, we first create a property and then create
    a method that assigns the property with a DOM element passed as a parameter.
    2. In callbackRef approach, we attach the ref to an element using the method
    that in turn assigns the element to the property.
    3/ Finally, in the callbackRef approach, it is directly accessed using
    this.referencevariable.
  */

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
