const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  compilers: {
    solc: {
      version: "0.6.8",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "wss://ropsten.infura.io/ws/v3/8151436a27dd4cdab264fa3ebf60a090"),
      network_id: 3,
      gas: 5500000,
      gasPrice: 10000000000,
      networkCheckTimeout: 10000000,
      confirmations: 2,    
      timeoutBlocks: 200,  
      skipDryRun: true      
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "wss://rinkeby.infura.io/ws/v3/f77b6dfe988c484595d679cd2ca13f80"),
      network_id: 4,
      gas: 6721975,
      gasPrice: 10000000000,
      networkCheckTimeout: 10000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  }
  //
};
