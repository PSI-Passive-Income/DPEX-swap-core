// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.4;

import '@passive-income/psi-contracts/contracts/interfaces/IBEP20.sol';

interface IDPexBEP20 is IBEP20 {
    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
