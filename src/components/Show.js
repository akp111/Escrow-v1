import React,{useState,useEffect} from "react"
import contB from "../js/deploy"

  function Show(){
        
        let [status, setstatus] = useState(0)
        console.log(status)
         //console.log(contB)
        let [balance,setbalance]= useState(0)
      
        return (
        <>
        <h1>Hello World</h1>
        <h2>{contB[0].dappAdd}</h2>
        <p>Balance:{balance}</p>
        <button onClick={async ()=>{setstatus(await contB[0].deployContB());setbalance(await contB[0].getBalance())}} disabled={status>=1}>Initiate escrow</button>
        <button onClick={async()=>{setstatus(await contB[0].confirmOwnership())}} disabled={status>=2}>Confirm Ownership</button>
        <button onClick={async()=>{setstatus(await contB[0].confirmDelivery());setbalance(await contB[0].getBalance())}} disabled={status==3}>Confirm Delivery</button>
        </>
        )
    
}

export default Show;
