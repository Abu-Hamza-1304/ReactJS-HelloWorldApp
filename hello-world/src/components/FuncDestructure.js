import React from "react";

// First way to destructure is in the function parameter
const FunctionDestructure = ({ firstName, lastName }) => {
  // Second way to destructure is in the function body
  // const {firstName, lastName} = props
  return (
    <div>
      <h2>
        My name is {firstName} {lastName}
      </h2>
      <p>This is functional destructure.</p>
    </div>
  );
};

export default FunctionDestructure;
