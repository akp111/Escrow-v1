import React,{useState,useEffect} from "react"
import contB from "../js/deploy"

  class Show extends React.Component{
        
        constructor(props)
        {
          super(props);
          this.setState(
            {
              status:0,
              balance:0
            }
          )
        }

        async setStateAll()
        {
          this.setState({
            status:await contB[0].getStatus(),
            balance:await contB[0].getBalance()
          })
          
        }
        render(){
        return (
        <>
        <h1>Escrow Contract Live Deploy</h1>
        <h2>Dapp Owner Address:{contB[0].dappAdd}</h2>
        <p>Balance:{balance}</p>
        <button onClick={async ()=>{await this.setStateAll}} disabled={status>=1}>Initiate escrow</button>
        <button onClick={async()=>{await this.setStateAll}} disabled={status>=2}>Ownership Transfer</button>
        <button onClick={async()=>{await this.setStateAll}} disabled={status==3}>Confirm Payment</button>
        </>
        )
      }
    
}

export default Show;
