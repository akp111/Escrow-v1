import React,{useState} from "react"

function Test (){
    let [state, setstate] = useState(1)
    return(
        <>
        <h1>Hello World</h1>
    <button onClick={()=>{setstate(2);}} disabled={state==2}>{state}</button>
        </>
    )
}

export default Test