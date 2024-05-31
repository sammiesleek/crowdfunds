// src/contract.js
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../config";

export const createCampaign = async (
  signer,
  _owner,
  _title,
  _description,
  _target,
  _deadline,
  _image
) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  try {
    const tx = await contract.createCampaign(
      _owner,
      _title,
      _description,
      _target,
      _deadline,
      _image
    );
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
