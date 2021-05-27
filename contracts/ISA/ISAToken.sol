pragma solidity >=0.4.25 <0.8.0;

import "../ERC20/ERC20.sol";

contract ISAToken is ERC20 {
    constructor (
        string memory name_,
        string memory symbol_,
        uint256 initialBalance_,
        address payable feeReceiver_
    ) public
        ERC20(name_, symbol_)
        payable
    {
        require(initialBalance_ > 0, "ISAToken: Suppyl cannot be zero");
        _mint(_msgSender(), initialBalance_);
    }
}