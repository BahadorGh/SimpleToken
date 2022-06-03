const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const SimpleToken = await hre.ethers.getContractFactory("MyToken");
  const mySimpleToken = await SimpleToken.deploy();

  await mySimpleToken.deployed();

  console.log("My token deployed to:", mySimpleToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
