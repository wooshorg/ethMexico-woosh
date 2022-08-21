import { ConnectExtension } from "@magic-ext/connect";
import { Magic } from "magic-sdk";

const customNodeOptions = {
  rpcUrl: "https://matic-mumbai.chainstacklabs.com", // Polygon RPC URL
  chainId: 80001, // Polygon chain id
};

export const magic = new Magic(process.env.REACT_APP_PUBLIC_MAGIC, {
  extensions: [new ConnectExtension()],
  network: customNodeOptions,
});
// magic.connect.supportedSdkMethods();
