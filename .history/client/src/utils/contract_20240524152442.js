// src/contract.js
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../config";

export const createCampaign = async (
  signer,
  _title,
  _description,
  _target,
  _deadline, // this should be a date string, e.g., "2024-05-17"
  _image
) => {
  try {
    // Get the Ethereum account address associated with the signer
    const _owner = await signer.getAddress();

    // Convert the date string to a timestamp
    console.log(_title);
    const deadlineTimestamp = Math.floor(new Date(_deadline).getTime() / 1000);

    // Create a contract instance using the provided signer
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Call the contract's createCampaign function with the provided parameters
    const tx = await contract.createCampaign(
      _owner,
      _title,
      _description,
      _target,
      deadlineTimestamp, // pass the converted timestamp
      _image
    );

    // Wait for the transaction to be mined and confirmed
    await tx.wait();

    console.log("Campaign created successfully:", tx);
  } catch (error) {
    console.error("Error creating campaign:", error);
  }
};

export const donateToCampaign = async (signer, id, amount) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  try {
    const tx = await contract.donateToCampaign(id, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    console.log("Donation successful:", tx);
  } catch (error) {
    console.error("Error donating to campaign:", error);
  }
};

export const getCampaigns = async (provider) => {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  try {
    const campaigns = await contract.getCampaigns();
    return campaigns;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
  }
};
