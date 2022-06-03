# To use this truffle repo:

- npm init -y
- truffle init
- npm install @truffle/hdwallet-provider
- npm install dotenv
- enter your wallet info into env file(as provided in the directory)
- if you want to deploy on ropsten(ethereum), need to use infura(or alchemy) project id(api)
- truffle compile
- truffle migrate --network [networkName]
