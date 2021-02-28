import { Contract, Wallet } from 'ethers'
import { providers } from 'ethers'
import { deployContract } from 'ethereum-waffle'

import { expandTo18Decimals } from './utilities'

import { DPexFactory, DPexPair, IBEP20 } from '../../typechain'
import ERC20Abi from '../../artifacts/contracts/test/ERC20.sol/ERC20.json'
import DPexFactoryAbi from '../../artifacts/contracts/DPexFactory.sol/DPexFactory.json'
import DPexPairAbi from '../../artifacts/contracts/DPexPair.sol/DPexPair.json'

interface FactoryFixture {
  factory: DPexFactory
}

const overrides = {
  gasLimit: 9999999
}

export async function factoryFixture([wallet]: Wallet[], _: providers.Web3Provider): Promise<FactoryFixture> {
  const factory = await deployContract(wallet, DPexFactoryAbi, [wallet.address], overrides) as DPexFactory
  return { factory }
}

interface PairFixture extends FactoryFixture {
  token0: IBEP20
  token1: IBEP20
  pair: DPexPair
}

export async function pairFixture([wallet]: Wallet[], provider: providers.Web3Provider): Promise<PairFixture> {
  const { factory } = await factoryFixture([wallet], provider)

  const tokenA = await deployContract(wallet, ERC20Abi, [expandTo18Decimals(10000)], overrides) as IBEP20
  const tokenB = await deployContract(wallet, ERC20Abi, [expandTo18Decimals(10000)], overrides) as IBEP20

  await factory.createPair(tokenA.address, tokenB.address, overrides)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(DPexPairAbi.abi), provider).connect(wallet) as DPexPair

  const token0Address = (await pair.token0())
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  return { factory, token0, token1, pair }
}
