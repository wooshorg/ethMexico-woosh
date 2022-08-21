import { Wallet, ethers, utils } from "ethers";

import { magic } from "./magic";
import { omit } from "../lib/helpers";

const provider = new ethers.providers.Web3Provider(magic.rpcProvider);

export const getSigner = () => {
  return provider.getSigner();
};

export const getAddressFromSigner = async () => {
  const address = await getSigner().getAddress();
  return address;
};

export const signedTypeData = (domain, types, value) => {
  const signer = getSigner();
  // remove the __typedname from the signature!
  return signer._signTypedData(
    omit(domain, "__typename"),
    omit(types, "__typename"),
    omit(value, "__typename")
  );
};

export const splitSignature = (signature) => {
  return utils.splitSignature(signature);
};

export const sendTx = (transaction) => {
  const signer = getSigner();
  return signer.sendTransaction(transaction);
};

export const signText = (text) => {
  return getSigner().signMessage(text);
};
