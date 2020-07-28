pragma solidity >=0.4.0 <=0.7.0;

contract A{
    address[] contadd;

    mapping (address=>mapping(address=>address)) public addTocont ;
  
  function recordAdd(address _cont,address _dapp) public{
      addTocont[msg.sender][_dapp]=_cont;
  }

}

// contract B{
    
//     enum State { AWAITING_PAYMENT,AWAIT_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    
//     State public currState;
    
//     address public publisher;
//     address payable public Dapp;
//     uint public reward;
    
//     modifier onlyBuyer() {
//         require(msg.sender == publisher, "Only buyer can call this method");
//         _;
//     }
     
    
//     constructor( address payable _seller, uint _reward) public {
//         publisher = msg.sender;
//         Dapp=_seller;
//         reward=_reward;
//         require(currState == State.AWAITING_PAYMENT, "Already paid");
//         currState = State.AWAIT_TRANSFER;
//         address payable contractAdd = address(uint160(address(this)));
//         contractAdd.transfer(reward);
        
//     }
    
//     function confirmOwnershipTransfer() external {
//         require(currState == State.AWAIT_TRANSFER,"Already Transfered");
//         require(msg.sender==Dapp);
//          currState = State.AWAITING_DELIVERY;
//     }
    
//     function confirmDelivery() onlyBuyer external {
//         require(currState == State.AWAITING_DELIVERY, "Cannot confirm delivery");
//         Dapp.transfer(address(this).balance);
//         currState = State.COMPLETE;
//     }
// }