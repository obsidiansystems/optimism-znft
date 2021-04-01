import {HardhatRuntimeEnvironment} from 'hardhat/types'
import {DeployFunction} from 'hardhat-deploy/types'

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy('ZNFT', {
    from: deployer,
    args: [],
    gasPrice: hre.ethers.BigNumber.from('0'),
    log: true
  })
}

export default func
func.tags = ['ZNFT']
