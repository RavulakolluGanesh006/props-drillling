import React from "react";
import D from "./D";
function C(props) {
  return (
    <div>
      <h2>C component</h2>
      <p>A Data:{props.dataC}</p>
      <hr />
      <D dataD={props.dataC} />
    </div>
  );
}

export default C;