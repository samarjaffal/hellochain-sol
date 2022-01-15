//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract HelloChain{
    uint256 totalHellos;

    event newHello(address indexed from, uint256 timestamp, string message);

    struct Hello {
        address user; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Hello[] hellos;

    mapping(address => uint256) public lastHelloAt;

    function initialize() view public{
        console.log("init");
    }

    function hello(string memory _message) public {

        lastHelloAt[msg.sender] = block.timestamp;


        totalHellos += 1;
        console.log("%s hello w/ message %s", msg.sender, _message);


        hellos.push(Hello({
            user: msg.sender,
            message: _message,
            timestamp: block.timestamp
        }));

        emit newHello(msg.sender, block.timestamp, _message);
    }
    

    function getAllHello() public view returns (Hello[] memory) {
        return hellos;
    }
}