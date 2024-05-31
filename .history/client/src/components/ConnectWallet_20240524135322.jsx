import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { ContextApi } from "../utils/ContextApi";

const ConnectWallet = () => {
  const { owner, setOwner, signer, setSigner } = useContext(ContextApi);

  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setOwner(accounts[0]);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          setSigner(signer);
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    } else {
      console.error(
        "MetaMask not detected. Please install MetaMask to use this application."
      );
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setOwner(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert(
        "MetaMask not detected. Please install MetaMask to use this application."
      );
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      {owner ? (
        <p>Connected: {owner}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
