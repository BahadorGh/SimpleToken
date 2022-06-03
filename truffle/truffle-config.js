require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports={
    networks: {
        testnet: {
            provider: () => new HDWalletProvider(
                process.env.PRIVATE_KEY, 
                "https://data-seed-prebsc-1-s1.binance.org:8545"
                ),
            network_id: 97,
            gas: 1000000,
            confirmations: 2,
            gasPrice: 20000000000,
            timeoutBlocks: 200000,
        },
        ropsten: {
            provider: () => new HDWalletProvider(
                process.env.PRIVATE_KEY, 
                process.env.API_URL
                ),
            network_id: 3,
            gas: 1000000,
            confirmations: 2,
            gasPrice: 20000000000,
            timeoutBlocks: 200000,
        }
    },
    compilers: {
        solc: {
            version: "0.8.11",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                evmVersion: "byzantium"
            }
        }
    }
};
