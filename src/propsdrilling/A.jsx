import {useState} from 'react';
import B  from "./B"
function A(){
    const[slate,setSlate]=useState("before A data")

    return(
        <div>
    <h1>A component</h1>
    <button onClick={()=>{
        setSlate("present A data")
    }}>Send data</button>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <B  data={slate}/>
        </div>
    )
}
export default A;