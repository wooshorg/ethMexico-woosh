import { Magic } from 'magic-sdk';
import { ConnectExtension } from '@magic-ext/connect'

export const magic = new Magic(process.env.REACT_APP_PUBLIC_MAGIC, {
    extensions: [new ConnectExtension()],
	network: "mumbai", 
});
// magic.connect.supportedSdkMethods();