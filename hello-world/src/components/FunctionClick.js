import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
      <p>This is a click button in functional component.</p>
    </div>
  );
}

export default FunctionClick;
