import { useContext, useState } from "react";
import { ethers } from "ethers";
import { ContextApi } from "../utils/ContextApi";
import ConnectWallet from "./ConnectWallet";
import { useNavigate } from "react-router-dom";
import { donateToCampaign } from "../utils/contract";

const Donate = () => {
  const { owner, signer } = useContext(ContextApi);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleDonate = async () => {
    setIsLoading(true);

    try {
      const rest = await donateToCampaign(signer, 7, amount);
      console.log(rest);
      // navigate("/");
    } catch (error) {
      setErrorMessage("Donation failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonText = owner ? "Donate" : "Connect";
  const buttonColor = owner ? "bg-[#1dc071]" : "bg-[#8c6dfd]";

  return (
    <div className="flex-1">
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
        Fund
      </h4>

      <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
        <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]">
          Fund the campaign
        </p>
        <div className="mt-[30px]">
          <input
            type="number"
            placeholder="ETH 0.1"
            step="0.01"
            className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
              Back it because you believe in it.
            </h4>
            <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>

          {errorMessage && (
            <p className="font-epilogue font-normal text-[14px] leading-[22px] text-red-500">
              {errorMessage}
            </p>
          )}

          {owner ? (
            <button
              className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${buttonColor}`}
              onClick={handleDonate}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : buttonText}
            </button>
          ) : (
            <ConnectWallet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;
