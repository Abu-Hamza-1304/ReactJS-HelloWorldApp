import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h3>{name}</h3>);
  return (
    <div>
      {/* Appraoch 1 */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* Approach 2 */}
      {/* {
          names.map(name => <h3>{name}</h3>)
      } */}

      {/* Approach 3 */}
      <div>
        <div>{nameList}</div>
        <p>This is name list rendering.</p>
      </div>
    </div>
  );
}

export default NameList;
