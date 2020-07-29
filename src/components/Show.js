import React from "react"
import contB from "../js/deploy"

function Show(){
    
        return (
        <>
        <h1>Hello World</h1>
        <h2>{contB[0].dappAdd}</h2>
        <button onClick={contB[0].deployContB}>Deploy Contract B</button>
        <button onClick={contB[0].confirmOwnership}>Confirm Ownership</button>
        <button onClick={contB[0].confirmDelivery}>Confirm Delivery</button>
        </>
        )
    
}

export default Show;
