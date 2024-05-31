import { ethers } from "ethers";
import { contractAddress, contractABI } from "../config";

const getEthereumObject = () => window.ethereum;

const getContract = () => {
  const ethereum = getEthereumObject();
  if (!ethereum) {
    console.error("Ethereum object is not found, make sure you have MetaMask installed.");
    return null;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};

export const createCampaign = async (title, description, target, deadline, image) => {
  try {
    const contract = getContract();
    if (!contract) return;
    const tx = await contract.createCampaign(
      await contract.signer.getAddress(),
      title,
      description,
      ethers.utils.parseUnits(target, "ether"),
      Math.floor(new Date(deadline).getTime() / 1000),
      image
    );
    await tx.wait();
    console.log("Campaign created successfully!");
  } catch (error) {
    console.error("Error creating campaign:", error);
 
