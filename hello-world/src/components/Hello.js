// First step is always to import React
import React from "react";

/* Second step is to create a function that returns what
appears to be HTML but is infact JSX */

// React component using JSX
const Hello = () => {
  return (
    <div>
      <h1>Hello Abu! This is the JSX version of Hello component.</h1>
    </div>
  );
};

// Final step is to export it as the default export
export default Hello;