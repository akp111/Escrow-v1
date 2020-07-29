
//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;
contract A {
    
    struct escrowContract{
        address con;
        address publisher;
        address dapp;
        uint reward;
        
        
    }
    
    
    mapping(string => escrowContract) contractAddress;
    
    
    function pushContractAddress(string memory hash,address escrowCon, address pub,address user,uint quesReward)
        public
    {
        contractAddress[hash].con=escrowCon;
        contractAddress[hash].publisher=pub;
        contractAddress[hash].dapp=user;
        contractAddress[hash].reward=quesReward;
    }
    
    function sendContractAddress(string memory hash) public view  returns(escrowContract memory) 
    {
        return contractAddress[hash];
        
    }
    
    
    
}

// contract B{
    
//     enum State { AWAITING_PAYMENT,AWAIT_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    
//     State public currState;
    
//     address payable public publisher;
//     address payable public Dapp;
//     uint public reward;
    
//     modifier onlyBuyer() {
//         require(msg.sender == publisher, "Only buyer can call this method");
//         _;
//     }
     
    
//     constructor( address payable _seller)payable public {
//         publisher = msg.sender;
//         Dapp=_seller;
//         reward=msg.value;
//         require(currState == State.AWAITING_PAYMENT, "Already paid");
//         currState = State.AWAIT_TRANSFER;
//         // address payable contractAdd = payable (address(uint160(address(this))));
//         payable(address(this)).transfer(reward);
        
//     }
    
//     function confirmOwnershipTransfer() external {
//         require(currState == State.AWAIT_TRANSFER,"Already Transfered");
//         require(msg.sender==Dapp);
//          currState = State.AWAITING_DELIVERY;
//     }
    
//     function confirmDelivery() payable onlyBuyer external {
//         require(currState == State.AWAITING_DELIVERY, "Cannot confirm delivery");
//         Dapp.transfer(address(this).balance);
//         currState = State.COMPLETE;
//     }
// }