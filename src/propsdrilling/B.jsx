import React from "react";
import C from "./C";
function B(props) {
  //props = {data:""}
  return (
    <div>
      <h2>B Component</h2>
      <p>A Data :{props.data} </p>
      <hr />
      <C dataC={props.data} />
    </div>
  );
}

export default B;