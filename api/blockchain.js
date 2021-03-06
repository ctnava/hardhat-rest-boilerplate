const { ethers } = require("ethers");
const extractedObject = require("../lib/json.js");
const getProvider = require('../lib/providers.js');

exports.Contract = (address, abi, chainId) => {
  return new ethers.Contract(address, abi, getProvider(chainId))
}

exports.loadContract = (chainId, name) => {
  const artifactsDir = `./data/${chainId}`;
  const address = extractedObject(artifactsDir, `${name}-address`).address;
  const abi = extractedObject(artifactsDir, name).abi;
  return Contract(address, abi, chainId);
}


