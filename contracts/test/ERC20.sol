// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.4;

import '../DPexBEP20.sol';

contract ERC20 is DPexBEP20 {
    constructor(uint _totalSupply) {
        _mint(msg.sender, _totalSupply);
    }
}
