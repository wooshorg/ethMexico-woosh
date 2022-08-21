import { web3 } from "./web3";

// TODO: Setup DAI Contract

// TODO: Get DAI ABI, DAI ADDRESS
const daiABI = require("./DAI.json")["abi"];
const daiAddress = require("./DAI.json")["address"];
const contract = new web3.eth.Contract(daiABI, daiAddress);
console.log("🚀 | contract", contract);

export const getBalanceOf = async (address) => {
  const balance = await contract.methods.balanceOf(address).call();
  return balance;
};

// TODO: Setup Transfer Function for DAI (safeTransferFrom/transferFrom/transfer)
export const transferDAI = async (to, amount, sender) => {
  const result = await contract.methods.transfer(to, amount).send({from: sender});
  return result; 
};

const sendTransaction = async () => {
  const publicAddress = (await web3.eth.getAccounts())[0];
  const txnParams = {
    from: publicAddress,
    to: publicAddress,
    value: web3.utils.toWei("0.01", "ether"),
    gasPrice: web3.utils.toWei("30", "gwei"),
  };
  web3.eth
    .sendTransaction(txnParams)
    .on("transactionHash", (hash) => {
      console.log("the txn hash that was returned to the sdk:", hash);
    })
    .then((receipt) => {
      console.log("the txn receipt that was returned to the sdk:", receipt);
    })
    .catch((error) => {
      console.log(error);
    });
};
