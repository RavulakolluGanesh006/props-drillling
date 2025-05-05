import { useReducer } from "react";

const reducer = (state, action) => {
    var newState;
    if (action.type === "add") {
      newState = state + action.value;
    } else if (action.type === "sub") {
      newState = state - action.value;
    } else if (action.type === "mul") {
      newState = state * action.value;
    }
  
    return newState;
  };





function Counter(){
    let[state,dispatch]=useReducer(reducer,0)
    return(
<div style={{marginLeft:"100px",marginTop:"100px"}}>
<h2>Cout Value is : {state}</h2>
    <button onClick={()=>{
        dispatch({ type: "add", value: 1 })
    }}>inc count</button>
    <br></br>
    <br></br>
    <button onClick={()=>{
        dispatch({ type: "sub", value: 1 })
    }}>dec count</button>
    <br></br>
    <br></br>
    <button onClick={()=>{
        dispatch({ type: "mul", value: 2 })
    }}>mult count by 2</button>
</div>
    )
}
export default Counter;