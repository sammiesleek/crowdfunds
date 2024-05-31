// src/components/ConnectWallet.jsx
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setSigner }) => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
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
        setCurrentAccount(accounts[0]);
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
      {currentAccount ? (
        <p>Connected: {currentAccount}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
