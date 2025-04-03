# Acurast Akash Demo

This project demonstrates the integration between Acurast and Akash Network, allowing you to deploy and run applications on Akash Network through Acurast's decentralized computing platform.

## Installation

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```env
RPC_ENDPOINT=your_akash_rpc_endpoint
MNEMONIC=your_akash_mnemonic
```

## Building

To build the project:

```bash
npm run build
```

This will create a bundled version of the application in the `dist` directory using webpack.

## Deployment to Acurast

1. Initialize Acurast:

```bash
acurast init
```

This will generate an Acurast account. Follow the steps in the CLI to get funds from the faucet.

2. Deploy the project:

```bash
acurast deploy
```

The deployment configuration is specified in `acurast.json`, which includes:

- Execution type: One-time with max execution time of 5 minutes
- Environment variables included in deployment (RPC_ENDPOINT and MNEMONIC)
- Single assignment strategy
- Only attested devices allowed

## Configuration

The project can be configured through:

- Environment variables in `.env`
- Acurast deployment settings in `acurast.json`

## Dependencies

The project uses:

- @akashnetwork/akash-api and @akashnetwork/akashjs for Akash Network integration
- @cosmjs/proto-signing and @cosmjs/stargate for Cosmos SDK integration
- TypeScript for development
- Webpack for bundling

## License

MIT
