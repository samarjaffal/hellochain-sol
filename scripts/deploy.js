const { ethers } = require("hardhat");

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
    
    helloChainCF = await ethers.getContractFactory("HelloChain");
    helloChain = await helloChainCF.deploy();
    await helloChain.deployed();

    console.log("HelloChain address: ", helloChain.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();