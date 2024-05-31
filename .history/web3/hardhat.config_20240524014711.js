require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;
module.exports = {
  defaultNetwork: "bscTestnet",
  networks: {
    hardhat: {},
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
