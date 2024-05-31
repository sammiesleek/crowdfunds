require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "bscTestnet",
  networks: {
    hardhat: {},
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [
        `0x${c223f5a54790c519a3b656e8c6a7cd13151938feacaecd6af29e635c9490caaf}`,
      ],
    },
    bscMainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [`0x${YOUR_PRIVATE_KEY}`],
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
