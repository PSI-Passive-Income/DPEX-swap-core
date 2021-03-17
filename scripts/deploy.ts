// npx hardhat run scripts/deploy.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { ethers, upgrades } from "hardhat";
import { DPexFactory } from '../typechain'
import DPexFactoryAbi from '../artifacts/contracts/DPexFactory.sol/DPexFactory.json'

const main = async() => {

    const signer = ethers.provider.getSigner();
    // const factory = new ethers.Contract("0xdDbf01489c30054446B54f48e63BC7101FFE45C3", DPexFactoryAbi, signer) as DPexFactory;
    const DPexFactory = await ethers.getContractFactory("DPexFactory");
    const factory: DPexFactory = await upgrades.deployProxy(DPexFactory, ["0x2C9C756A7CFd79FEBD2fa9b4C82c10a5dB9D8996"], { initializer: 'initialize' }) as DPexFactory;
    await factory.deployed();
    console.log("DPexFactory deployed to:", factory.address);
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
