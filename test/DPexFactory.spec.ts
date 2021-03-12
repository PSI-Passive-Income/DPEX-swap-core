import chai, { expect } from 'chai'
import { BigNumber, constants, Contract } from 'ethers'
import { waffle } from 'hardhat'

import { factoryFixture } from './shared/fixtures'

import { DPexFactory, DPexPair, Pair } from '../typechain'
import DPexPairAbi from '../artifacts/contracts/DPexPair.sol/DPexPair.json'
import PairAbi from '../artifacts/contracts/test/Pair.sol/Pair.json'

chai.use(waffle.solidity)

const TEST_ADDRESSES: [string, string] = [
  '0x1000000000000000000000000000000000000000',
  '0x2000000000000000000000000000000000000000'
]

describe('DPexFactory', () => {
  const { provider, deployContract, createFixtureLoader } = waffle;
  const [wallet, other] = provider.getWallets()
  const loadFixture = createFixtureLoader([wallet, other], provider)

  let pairRetriever: Pair;
  let factory: DPexFactory
  beforeEach(async () => {
    const fixture = await loadFixture(factoryFixture)
    factory = fixture.factory
    pairRetriever = await deployContract(wallet, PairAbi) as Pair;
  })

  it('feeTo, feeToSetter, allPairsLength', async () => {
    expect(await factory.feeTo()).to.eq(constants.AddressZero)
    expect(await factory.feeToSetter()).to.eq(wallet.address)
    expect(await factory.allPairsLength()).to.eq(0)
  })

  async function createPair(tokens: [string, string]) {
    const create2Address = await pairRetriever.pairFor(factory.address, tokens[0], tokens[1])
    await expect(factory.createPair(...tokens))
      .to.emit(factory, 'PairCreated')
      .withArgs(TEST_ADDRESSES[0], TEST_ADDRESSES[1], create2Address, BigNumber.from(1))

    await expect(factory.createPair(...tokens)).to.be.reverted // DPEX: PAIR_EXISTS
    await expect(factory.createPair(tokens[0], tokens[1])).to.be.reverted // DPEX: PAIR_EXISTS
    expect(await factory.getPair(...tokens)).to.eq(create2Address)
    expect(await factory.getPair(tokens[0], tokens[1])).to.eq(create2Address)
    expect(await factory.allPairs(0)).to.eq(create2Address)
    expect(await factory.allPairsLength()).to.eq(1)

    const pair = new Contract(create2Address, JSON.stringify(DPexPairAbi.abi), provider) as DPexPair
    expect(await pair.factory()).to.eq(factory.address)
    expect(await pair.token0()).to.eq(TEST_ADDRESSES[0])
    expect(await pair.token1()).to.eq(TEST_ADDRESSES[1])
  }

  it('createPair', async () => {
    await createPair(TEST_ADDRESSES)
  })

  it('createPair:reverse', async () => {
    await createPair(TEST_ADDRESSES.slice().reverse() as [string, string])
  })

  it('createPair:gas', async () => {
    const tx = await factory.createPair(...TEST_ADDRESSES)
    const receipt = await tx.wait()
    expect(receipt.gasUsed).to.eq(3139615)
  })

  it('setFeeTo', async () => {
    await expect(factory.connect(other).setFeeTo(other.address)).to.be.revertedWith('DPexFactory: FORBIDDEN')
    await factory.setFeeTo(wallet.address)
    expect(await factory.feeTo()).to.eq(wallet.address)
  })

  it('setFeeToSetter', async () => {
    await expect(factory.connect(other).setFeeToSetter(other.address)).to.be.revertedWith('DPexFactory: FORBIDDEN')
    await factory.setFeeToSetter(other.address)
    expect(await factory.feeToSetter()).to.eq(other.address)
    await expect(factory.setFeeToSetter(wallet.address)).to.be.revertedWith('DPexFactory: FORBIDDEN')
  })
})
