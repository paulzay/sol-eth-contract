const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
}

const runMain = () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console(error);
    process.exit(1); s
  }
}

runMain();
