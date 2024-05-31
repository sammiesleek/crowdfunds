import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { ContextApi } from "../utils/ContextApi";

const Donate = () => {
  const { owner, setOwner, setSigner } = useContext(ContextApi);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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
        setErrorMessage("Error checking wallet connection.");
      }
    } else {
      setErrorMessage("MetaMask not detected. Please install MetaMask.");
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      setIsLoading(true);
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
        setErrorMessage("Error connecting to wallet.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const buttonText = owner ? "Donate" : "Connect";
  const buttonColor = owner ? "bg-[#1dc071]" : "bg-[#8c6dfd]";

  return owner ? (
    <button
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${buttonColor}`}
      onClick={donate} // Action for owner
      disabled={isLoading}
    >
      {buttonText}
    </button>
  ) : (
    <button
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${buttonColor}`}
      onClick={connectWallet}
      disabled={isLoading}
    >
      {buttonText}
    </button>
  );
};

export default Donate;
