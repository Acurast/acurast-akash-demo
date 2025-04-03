import dotenv from "dotenv";

// Load env vars once
dotenv.config();

// Export configured values
export const config = {
  rpcEndpoint: process.env.RPC_ENDPOINT || "",
  mnemonic: process.env.MNEMONIC || "",
}; 