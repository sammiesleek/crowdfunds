// src/contract.js
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../config";

let provider;
let signer;
let contract;

export const initializeProvider = async () => {
  try {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.error("MetaMask is not installed!");
    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
  }
};

export const createCampaign = async (
  _owner,
  _title,
  _description,
  _target,
  _deadline,
  _image
) => {
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

export const donateToCampaign = async (id, amount) => {
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

export const getCampaigns = async () => {
  try {
    const campaigns = await contract.getCampaigns();
    return campaigns;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
  }
};
