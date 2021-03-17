// npx hardhat run scripts/upgrade.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { ethers, upgrades } from "hardhat";
import { DPexFactory } from '../typechain'
import DPexFactoryAbi from '../artifacts/contracts/DPexFactory.sol/DPexFactory.json'

const main = async() => {
  const factProxyAddress = '0x5B77b700CeDc6Bf8Ff49Ba1ab09978D5c6177886';

  const DPexFactory = await ethers.getContractFactory("DPexFactory");
  const factory: DPexFactory = await upgrades.upgradeProxy(factProxyAddress, DPexFactory) as DPexFactory;
  console.log("DPexFactory updated:", factory.address);
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });