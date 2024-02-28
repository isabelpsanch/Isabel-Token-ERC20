import {  createConfig } from "wagmi";
import {  getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Blockmarket Token Dapp",
    chains: [sepolia]

  }),
);

