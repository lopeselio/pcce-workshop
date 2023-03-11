var test = artifacts.require("testToken");

module.exports = function(deployer) {
  // deployment
  deployer.deploy(test, '10000000000000000000000');
};