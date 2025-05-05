import { useRef, useState } from "react";

function UserefC() {
  let myRef = useRef("QT"); // myRef = {current:"QT"}
  let [state, setState] = useState(0);
 



  const display = () => {
    console.log(state, myRef);
  };

  
  return (
    <div>
      <h2>useRef() hook concept :{state}</h2>
      <p>Value of useRef()</p>
      <button
        onClick={() => {
          setState(100);
        }}
      >
        Update State
      </button>

      <button onClick={display}>Print Values</button>
      <button
        onClick={() => {
          myRef.current = "Quality T";
        }}
      >
        Update Ref
      </button>
    </div>
  );
}

export default UserefC;