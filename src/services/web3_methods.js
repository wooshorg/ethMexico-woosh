import web3 from "./web3";

const daiContract = 

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

const sendDAI = async () => {


const signMessage = async () => {
  const publicAddress = (await web3.eth.getAccounts())[0];
  const signedMessage = await web3.eth.personal
    .sign("My Message", publicAddress, "")
    .catch((e) => console.log(e));
  console.log(signedMessage);
};

const showWallet = () => {
  magic.connect.showWallet().catch((e) => {
    console.log(e);
  });
};
