// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const userDetailsFactory = await hre.ethers.getContractFactory("userDetails");
  const userDetails = await userDetailsFactory.deploy();

  const supplierProductFactory = await hre.ethers.getContractFactory(
    "supplierProduct"
  );
  const supplierProduct = await supplierProductFactory.deploy();

  const manufacturerProductFactory = await hre.ethers.getContractFactory(
    "manufacturerProduct"
  );
  const manufacturerProduct = await manufacturerProductFactory.deploy();

  const distributorProductFactory = await hre.ethers.getContractFactory(
    "distributorProduct"
  );
  const distributorProduct = await distributorProductFactory.deploy();

  const supplierManufacturerFactory = await hre.ethers.getContractFactory(
    "supplierManufacturer"
  );
  const supplierManufacturer = await supplierManufacturerFactory.deploy();

  const manufacturerDistributorFactory = await hre.ethers.getContractFactory(
    "manufacturerDistributor"
  );
  const manufacturerDistributor = await manufacturerDistributorFactory.deploy();

  await userDetails.deployed();
  await supplierProduct.deployed();
  await manufacturerProduct.deployed();
  await distributorProduct.deployed();
  await supplierManufacturer.deployed();
  await manufacturerDistributor.deployed();

  console.log("Contract userDetails deployed to:", userDetails.address);
  console.log("Contract supplierProduct deployed to:", supplierProduct.address);
  console.log(
    "Contract manufacturerProduct deployed to:",
    manufacturerProduct.address
  );
  console.log(
    "Contract distributorProduct deployed to:",
    distributorProduct.address
  );
  console.log(
    "Contract supplierManufacturer deployed to:",
    supplierManufacturer.address
  );
  console.log(
    "Contract manufacturerDistributor deployed to:",
    manufacturerDistributor.address
  );
}

//after changes
// Contract userDetails deployed to: 0x345a54479E50ef9A0cAB015AF27A48142D40629f  //verified
// Contract supplierProduct deployed to: 0x3175bCC44B162941d38325005EBF867769Dec1A3   //verified
// Contract manufacturerProduct deployed to: 0x8d0E34868684f8bc8244E7f4f5B2784dce342309   //verified
// Contract distributorProduct deployed to: 0xb3169F83fdBDFf9b7affc76A3981B8e0049e5Bd9    //verified
// Contract supplierManufacturer deployed to: 0xbc04AF6F9DC7D40fC63CF12c5e6Ed6dC0fE6eE4c    //verified
// Contract manufacturerDistributor deployed to: 0x829D5780E6a31f2B7A9a7B44Cc45bd980baDB081   //verified

// graph add 0x829D5780E6a31f2B7A9a7B44Cc45bd980baDB081 --contract-name manufacturerDistributor

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
