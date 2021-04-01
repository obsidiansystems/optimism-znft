# Zora Media Protocol contracts on Optimism Ethereum

### Dependencies
If the nix package manager is installed, `nix-shell` will launch an environment where the native dependencies are all available.
Alternatively, they might be setup manually - running the commands should report missing dependencies in the error messages, but a [list](https://github.com/obsidiansystems/optimism-znft/blob/master/default.nix#L9-L11) is also available in the environment setup.

Finally, `yarn install` will handle the Javascript and Solidity dependencies.

### Building
`yarn compile` compiles the contracts for both EVM and OVM.

### Deploying
`yarn deploy` deploys the contracts targetting OVM to the Kovan testnet and outputs the resulting transaction and created contract address:
```
deploying "ZNFT" (tx: 0xf718fe0e27068c0bfcce2c1aca82f463915f11592062bcf18c75aa5a824deec6)...: deployed at 0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE with 6628783 gas
```

Loading this transaction in the [Kovan block explorer](https://kovan-l2-explorer.surge.sh) confirms a contract was created on the `deployed at` address. Reading the contract address's storage confirms the [owner field](https://github.com/ourzora/core/blob/55b69346b829e88c23b20cdc565123a75fa1339c/contracts/Market.sol#L30) was indeed [set to the transaction sender](https://github.com/ourzora/core/blob/55b69346b829e88c23b20cdc565123a75fa1339c/contracts/Market.sol#L144). e.g.

```shell
$ curl -XPOST --data '{"jsonrpc":"2.0","method":"eth_getStorageAt","params":["0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE", "1", "latest"],"id":1}' -Hcontent-type:application/json https://kovan.optimism.io
{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266"}
```
