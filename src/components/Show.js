import React,{useState,useEffect} from "react"
import contB from "../js/deploy"

function Show(){
        
        let [status, setstatus] = useState(0)
        let [balance,setbalance]= useState(0)
      
        return (
        <>
        <h1>Hello World</h1>
        <h2>{contB[0].dappAdd}</h2>
        <p>Balance: {balance}</p>
        <button onClick={()=>{contB[0].deployContB();setstatus(1)}} disabled={status>=1}>Initiate escrow</button>
        <button onClick={()=>{contB[0].confirmOwnership();setstatus(2)}} disabled={status!==1}>Confirm Ownership</button>
        <button onClick={()=>{contB[0].confirmDelivery();setstatus(3)}} disabled={status!=2}>Confirm Delivery</button>
        </>
        )
    
}

export default Show;
