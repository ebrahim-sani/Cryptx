require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/ojdJSnxbX0s-IcZFPTwq4s23acqeVCFu",
      accounts: [
        "54ff0ae6840938af73cebb89f16ff8b44aaaed76edd9222204a401103cf2c69c",
      ],
    },
  },
};
