const MerkleDistributor = artifacts.require("MerkleDistributor")
const RICEToken = "0xa13283562827D0Dff6D6811464D927edE029Ff46"
const merkleRoot = "0x93c054218fbd8325207678196c4434cbc929c50d3d74a0332ca3d8eeaa3ac3cc";

const migration = async (deployer, network, accounts) => {
    if (network.indexOf('fork') != -1) {
        return
    }
    await Promise.all([
        await deployMerkle(deployer, network, accounts),
    ])
};

async function deployMerkle(deployer, network, accounts) {
    await deployer.deploy(MerkleDistributor, RICEToken, merkleRoot)
}

module.exports = migration;