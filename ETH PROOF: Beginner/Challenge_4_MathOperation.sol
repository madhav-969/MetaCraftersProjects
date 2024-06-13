// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MathOperations {
    function addition(uint256 x, uint256 y) external pure returns (uint256) {
        return x + y;
    }

    function subtract(uint256 x, uint256 y) external pure returns (uint256) {
        return x - y;
    }

    function multiply(uint256 x, uint256 y) external pure returns (uint256) {
        return x * y;
    }
    function division(uint256 x, uint256 y) external pure returns (uint256) {
        return x / y;
    }
}
