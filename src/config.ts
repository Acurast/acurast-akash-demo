import dotenv from "dotenv";

// Load env vars once
dotenv.config();

declare const _STD_: {
  env: {
    RPC_ENDPOINT: string;
    MNEMONIC: string;
  };
};

if (typeof _STD_ === "undefined") {
  (global as any)._STD_ = {
    env: {
      RPC_ENDPOINT: process.env.RPC_ENDPOINT || "",
      MNEMONIC: process.env.MNEMONIC || "",
    },
  };
}

// Export configured values
export const config = {
  rpcEndpoint: _STD_.env.RPC_ENDPOINT || "",
  mnemonic: _STD_.env.MNEMONIC || "",
};
