// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.4;

import "./DPexPair.sol";

contract DPexPairInitHash {
    function get() public pure returns(bytes32){
        return keccak256(abi.encodePacked(type(DPexPair).creationCode));
    }
}