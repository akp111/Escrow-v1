
import Web3 from "web3";
import Aabi from "./Aabi"
import B from "./Babi"
const EthereumTx = require('ethereumjs-tx').Transaction;
const Babi=B.abi;//include the abi code of the contract you want to deploy through web3
const Bbyte=B.byte;//inlcude the bytecode of the contract you want to deploy

window.web3 = new Web3('http://localhost:8545')
const contractAAddress="0xd29d746dCf613d5bb1b2a47a71a4743adEaC4A8A"
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
     dappAdd:"0xe162Bf3c75657E6930c9ac5245164B81dAf019B0",
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
    arguments:[contB[0].dappAdd,2]//specify the arguments if you have constructor
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
  await contractA.methods.recordAdd(contB[0].contractBAddress,contB[0].dappAdd).send({from:account})

  contB[0].contractB=new window.web3.eth.Contract(JSON.parse(Babi), contB[0].contractBAddress);
  console.log(contB[0].contractB)
  console.log(contB[0].contractBAddress)
  console.log(await contractA.methods.addTocont(account,contB[0].dappAdd).call())
 },

 confirmOwnership:async function()
 {
   let {account,balance}=await contB[0].getAccount();
   if(await await contractA.methods.addTocont(account,contB[0].dappAdd).call()==contB[0].contractBAddress&&contB[0].contractBAddress!=null)
    await contB[0].contractB.methods.confirmOwnership().send({from:account})
 
 },
 confirmDelivery: async function()
 {
  let {account,balance}=await contB[0].getAccount();
  if(await await contractA.methods.addTocont(account,contB[0].dappAdd).call()==contB[0].contractBAddress&&contB[0].contractBAddress!=null)
  await contB[0].contractB.methods.confirmDelivery().send({from:account})

 }}
 
 ]

export default contB




