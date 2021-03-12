// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "@passive-income/psi-contracts/contracts/abstracts/Governable.sol";
import './interfaces/IDPexFactory.sol';
import './interfaces/IDPexPair.sol';
import "./DPexPair.sol";

contract DPexFactory is IDPexFactory, Initializable, Governable {
    bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(DPexPair).creationCode));
    address public override feeTo;
    address public override feeToSetter;

    mapping(address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    function initialize(address _feeToSetter, address _gov_contract) public initializer {
        super.initialize(_gov_contract);
        feeToSetter = _feeToSetter;
    }

    function allPairsLength() external override view returns (uint) {
        return allPairs.length;
    }

    function createPair(address tokenA, address tokenB) external override returns (address pair) {
        require(tokenA != tokenB, 'DPexFactory: IDENTICAL_ADDRESSES');
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'DPexFactory: ZERO_ADDRESS');
        require(getPair[token0][token1] == address(0), 'DPexFactory: PAIR_EXISTS'); // single check is sufficient

        bytes memory bytecode = type(DPexPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        
        require(pair != address(0), "DPexFactory: ERROR_CREATING_PAIR");
        IDPexPair(pair).initialize(gov_contract, token0, token1);

        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }


    function setFeeTo(address _feeTo) external override {
        require(msg.sender == feeToSetter, 'DPexFactory: FORBIDDEN');
        feeTo = _feeTo;
    }

    function setFeeToSetter(address _feeToSetter) external override {
        require(msg.sender == feeToSetter, 'DPexFactory: FORBIDDEN');
        feeToSetter = _feeToSetter;
    }
}