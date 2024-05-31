// src/components/DisplayCampaigns.js
import { useContext, useEffect } from "react";
import { getCampaigns, donateToCampaign } from "../utils/contract";
import { ethers } from "ethers";
import { ContextApi } from "../utils/ContextApi";

const DisplayCampaigns = () => {
  const { campaigns, setCampaigns, signer } = useContext(ContextApi);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsList = await getCampaigns();
      setCampaigns(campaignsList);
    };

    fetchCampaigns();
  }, []);

  const handleDonate = async (id) => {
    const amount = prompt("Enter the amount to donate (in ETH):");
    if (amount) {
      await donateToCampaign(signer, id, amount);
    }
  };

  return (
    <div>
      {campaigns?.map((campaign, index) => (
        <div key={index}>
          <h3>{campaign.title}</h3>
          <p>{campaign.description}</p>
          <p>
            Target: {ethers.utils.formatUnits(campaign.target, "ether")} ETH
          </p>
          <p>
            Collected:{" "}
            {ethers.utils.formatUnits(campaign.amountCollected, "ether")} ETH
          </p>
          <p>Deadline: {new Date(campaign.deadline * 1000).toLocaleString()}</p>
          <button onClick={() => handleDonate(index)}>Donate</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayCampaigns;
