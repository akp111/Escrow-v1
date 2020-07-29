
import Web3 from "web3";
import Aabi from "./Aabi"
import B from "./Babi"
const EthereumTx = require('ethereumjs-tx').Transaction;
const Babi=B.abi;//include the abi code of the contract you want to deploy through web3
const Bbyte=B.byte;//inlcude the bytecode of the contract you want to deploy

window.web3 = new Web3('http://localhost:8545')
const contractAAddress="0x46834751cE0734d3fA54329D4A6B07cb5cd5fDC0"
const contractA = new window.web3.eth.Contract(Aabi,contractAAddress)
async function loadWeb3()
   {
    // if (window.ethereum) {
    //   window.web3 = new Web3(window.ethereum)
    //   await window.ethereum.enable()
    //   window.ethereum.autoRefreshOnNetworkChange = false;
    // }
    // else if (window.web3) {
    //   window.web3 = new Web3(window.web3.currentProvider)
    //   window.ethereum.autoRefreshOnNetworkChange = false;
    // }
    // else {
    //   window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    // }
    window.web3 = new Web3('http://localhost:8545')
   }


 let contB=[
   {
  dappAdd:"0x9E5A4B34D57462865452a2781d4935A2B9AA6810",
   contractBAddress:null,//address of B
   contractB:null,//for calling functions

   
   getAccount: async function(){
    let account= await window.web3.eth.getAccounts((error, accounts) => {return accounts[0]})
    //console.log(account[0])
    let balance = await window.web3.eth.getBalance(account[0]);
    balance=window.web3.utils.fromWei(balance, 'ether')
    //console.log(balance)
    return {account:account[0],balance:balance};
    

   },

  deployContB:async function()
 {
   await loadWeb3();
   let {account,balance}=await contB[0].getAccount();
   
  let deploy_contract = new window.web3.eth.Contract(JSON.parse(Babi));
  let payload = {
    data: Bbyte,
    arguments:[contB[0].dappAdd]//specify the arguments if you have constructor
  }
  

  let parameter = {
    from: account,
    gas: window.web3.utils.toHex(800000),
    gasPrice: window.web3.utils.toHex(window.web3.utils.toWei('30', 'gwei'))
  }
  
  await deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
  }).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
    
    contB[0].contractBAddress=newContractInstance.options.address;
  })
  console.log(contractA)
  await contractA.methods.pushContractAddress("abc",contB[0].contractBAddress,account,contB[0].dappAdd,2).send({from:account,gas:120000})

  contB[0].contractB=new window.web3.eth.Contract(JSON.parse(Babi), contB[0].contractBAddress);
  console.log(contB[0].contractB)
  console.log(contB[0].contractBAddress)
 },

 confirmOwnership:async function()
 {
   let {account,balance}=await contB[0].getAccount();
    await contB[0].contractB.methods.confirmOwnershipTransfer().send({from:"0x9E5A4B34D57462865452a2781d4935A2B9AA6810"})
 console.log("Mona loves Ashis")
 },
 confirmDelivery: async function()
 {
  let {account,balance}=await contB[0].getAccount();
  await contB[0].contractB.methods.confirmDelivery().send({from:account})
  console.log("Ashis loves Mona")
 }}
 
 ]

export default contB




