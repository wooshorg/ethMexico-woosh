// import { ConnectExtension } from "@magic-ext/connect";
import { Magic } from "magic-sdk";

const customNodeOptions = {
  rpcUrl: process.env.REACT_APP_RPC, // Polygon RPC URL
  chainId: 80001, // Polygon chain id
};

export const magic = new Magic(process.env.REACT_APP_PUBLIC_MAGIC, {
  // extensions: [new ConnectExtension()],
  network: customNodeOptions,
});
// magic.connect.supportedSdkMethods();
