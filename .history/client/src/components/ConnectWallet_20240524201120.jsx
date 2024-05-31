import { useContext, useEffect } from "react";
import { ethers } from "ethers";
import { ContextApi } from "../utils/ContextApi";

const ConnectWallet = () => {
  const { owner, setOwner, setSigner } = useContext(ContextApi);

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

  {
    <button
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${
        owner ? "bg-[#1dc071]" : "bg-[#8c6dfd]"
      } `}
      onClick={ConnectWallet}
    >
      {owner ? "Create a campaign" : "Connect"}
    </button>;
  }

  return (
    <button
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${
        owner ? "bg-[#1dc071]" : "bg-[#8c6dfd]"
      } `}
      onClick={ConnectWallet}
    >
      {owner ? "Create a campaign" : "Connect"}
    </button>
    // <div>
    //   {owner ? (
    //     <p>Connected: {owner}</p>
    //   ) : (
    //     <button onClick={connectWallet}>Connect Wallet</button>
    //   )}
    // </div>
  );
};

export default ConnectWallet;
