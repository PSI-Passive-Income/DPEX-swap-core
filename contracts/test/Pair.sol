// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.4;

import "../DPexPair.sol";

contract Pair {
    // returns sorted token addresses, used to handle return values from pairs sorted in this order
    function sortTokens(address tokenA, address tokenB) public pure returns (address token0, address token1) {
        require(tokenA != tokenB, 'DPexLibrary: IDENTICAL_ADDRESSES');
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'DPexLibrary: ZERO_ADDRESS');
    }
    function pairFor(address factory, address tokenA, address tokenB) public pure returns (address pair) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = address(uint(keccak256(abi.encodePacked(
                hex'ff',
                factory,
                keccak256(abi.encodePacked(token0, token1)),
                keccak256(abi.encodePacked(type(DPexPair).creationCode)) // init code hash
            ))));
    }
}
