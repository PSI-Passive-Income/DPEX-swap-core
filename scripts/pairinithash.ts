// npx hardhat run scripts/pairinithash.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { ethers } from "hardhat";
import { DPexPairInitHash } from '../typechain/DPexPairInitHash';

const main = async() => {
    const DPexPairInitHash = await ethers.getContractFactory("DPexPairInitHash");
    const initHash: DPexPairInitHash = await DPexPairInitHash.deploy() as DPexPairInitHash;
    await initHash.deployed();
    console.log("Pair initHash:", await initHash.get());
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
