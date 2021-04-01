import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

import 'dotenv/config'
import 'hardhat-deploy'
import 'hardhat-gas-reporter'
import 'hardhat-deploy-ethers'
import '@typechain/hardhat'

import '@eth-optimism/plugins/hardhat/compiler'


const config: any = {
  namedAccounts: {
    deployer: 0
  },
  solidity: '0.6.12',
  ovm: {
    solcVersion: '0.6.12'
  },
  networks: {
    l2: {
      url: 'https://kovan.optimism.io',
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      }
    }
  }
}

export default config
