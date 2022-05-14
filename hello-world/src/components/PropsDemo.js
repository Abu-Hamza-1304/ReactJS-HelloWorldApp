import React from "react";

const PropsExample = props => {
  console.log(props)
  return (
    <div>
      <h2>Hello {props.name} a.k.a. {props.heroName}</h2>
      {props.children}
    </div>
  );
};

export default PropsExample;
