const { expect } = require("chai");
const { ethers } = require("hardhat");


let helloChainCF;
let helloChain;

describe("HelloChain", function () {

  beforeEach(async function () {
    helloChainCF = await ethers.getContractFactory("HelloChain");
    helloChain = await helloChainCF.deploy();
    await helloChain.deployed();
  });

  // Test case
  it('should returns a new hello', async function () {
    let hellos;

    hellos = await helloChain.getAllHello();
    console.log("hellos length:", hellos.length);

    let helloTxn = await helloChain.hello("This is hello #1");
    await helloTxn.wait();

    hellos = await helloChain.getAllHello();
 
    expect(hellos).to.have.lengthOf(1);
  });
});
