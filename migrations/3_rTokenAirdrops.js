const MerkleDistributor = artifacts.require("MerkleDistributor")

const getAirdropConfig = (_network) => {
    return require(`./config/${_network}Airdrops.json`)
}

// airdrops token
const airdropTokens = [
    "rUSD",
    "rBTC",
    "rETH"
]

const migration = async (deployer, network, accounts) => {
    if (network.indexOf('fork') != -1) {
        return
    }
    this.airdropCfg = getAirdropConfig(network)
    await Promise.all([
        await deployMerkle(deployer),
    ])
};

async function deployMerkle(deployer) {
    for (let i = 0; i < airdropTokens.length; i++) {
        let airdropToken = airdropTokens[i]
        let tokenAddr = this.airdropCfg[airdropToken].tokenAddr
        let merkleRoot = this.airdropCfg[airdropToken].merkleRoot
        let startAirdrop = this.airdropCfg[airdropToken].startAirdrop
        if (startAirdrop) {
            console.log(`tokenAddr: ${tokenAddr}, merkleRoot: ${merkleRoot}`)
            await deployer.deploy(MerkleDistributor, tokenAddr, merkleRoot)
        }
    }
}

module.exports = migration;