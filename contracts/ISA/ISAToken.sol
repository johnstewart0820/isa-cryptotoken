pragma solidity >=0.4.25 <0.8.0;

import "../ERC20/ERC20.sol";

contract ISAToken is ERC20 {
    constructor() public ERC20("ISA Token", "ISA")
    {
        // require(initialBalance_ > 0, "ISAToken: Supply cannot be zero");
        _mint(_msgSender(), 400000000 * (10 ** uint(decimals())));
    }
}