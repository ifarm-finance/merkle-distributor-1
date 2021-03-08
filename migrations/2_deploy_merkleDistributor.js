const MerkleDistributor = artifacts.require("MerkleDistributor")
const RICEToken = "0xAe479E294C6De21842A4dbdf6785D1eACb0a23aE"
const merkleRoot = "0x8f3f8b3152280a4a94782a6c1400d440887ad6a50a9486dbcaa6a852b713062f";

const migration = async (deployer, network, accounts) => {
    await Promise.all([
        await deployMerkle(deployer, network, accounts),
    ])
};

async function deployMerkle(deployer, network, accounts) {
    await deployer.deploy(MerkleDistributor, RICEToken, merkleRoot)
}

module.exports = migration;