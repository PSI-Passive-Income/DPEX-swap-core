// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.4;

interface IDPexCallee {
    function dpexCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
