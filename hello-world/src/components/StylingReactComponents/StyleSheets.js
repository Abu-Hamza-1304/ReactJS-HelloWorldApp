import React from "react";
import "./StyleSheets.css";

function StyleSheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      {/* <h2 className="primary">Style Sheets</h2> */}
      <h2 className={`${className} font-xl`}>Style Sheets</h2>
    </div>
  );
}

export default StyleSheets;
