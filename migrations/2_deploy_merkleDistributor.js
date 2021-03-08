const MerkleDistributor = artifacts.require("MerkleDistributor")
const RICEToken = "0xAe479E294C6De21842A4dbdf6785D1eACb0a23aE"
const merkleRoot = "0x662d842146e917ebe29f667a4af22f6eaf00e8f2df63b06a6cbcfeea78978826";

const migration = async (deployer, network, accounts) => {
    await Promise.all([
        await deployMerkle(deployer, network, accounts),
    ])
};

async function deployMerkle(deployer, network, accounts) {
    await deployer.deploy(MerkleDistributor, RICEToken, merkleRoot)
}

module.exports = migration;