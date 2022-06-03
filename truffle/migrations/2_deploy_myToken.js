const MyTokenVar = artifacts.require("myToken");

module.exports = function (deployer) {
  deployer.deploy(MyTokenVar);
};
