import React from "react";
import E from "./E";

function D(props) {
  return (
    <div>
      <h2>D Component</h2>
      <p>A Data:{props.dataD}</p>
      <E dataE={props.dataD}/>
    </div>
  );
}

export default D;