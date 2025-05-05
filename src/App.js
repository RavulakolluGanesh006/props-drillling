import { useReducer } from "react";
import "./App.css";
import Input from "./Redux-concept/components/Input";
import Display from "./Redux-concept/components/Display";


function App() {
  return (
    <div className="App">
      <Input />
   
      <Display />
    </div>
  );
}

export default App;

