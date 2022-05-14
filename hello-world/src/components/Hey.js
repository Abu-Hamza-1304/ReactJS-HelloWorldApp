import React from "react";

// React component without using JSX
const Hey = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement(
      "h1",
      null,
      "Hey Abu! This is the React component without using JSX."
    )
  );
};

/*  To help us writing code without using JSX, react library provides a
    createElement method and this method at minimum accepts three parameters.

    The first parameter is a string which specifies the HTML tag to be rendered.
    In our example, we need a div tag to be rendered.

    The second parameter we need to pass any optional properties.
    Since we don't need any additional properties, we pass a value of null.

    The third parameter is the children for the HTML element. i.e., children
    for the div tag.
    In our example, we simply have the text "Hey Abu!" which we will pass
    as the third parameter.

    Since createElement method can accept any number of elements as children,
    the third parameter now is again going to be React.createElement().

    The first parameter is going to be "h1 tag", since we have no additional
    properties, second parameter is going to be "null" and finally third parameter
    is going to be the text "Hey Abu!".

    The second parameter which will be ignoring is basically an object of key-value
    pairs that will be applied to the element.
*/

export default Hey;
