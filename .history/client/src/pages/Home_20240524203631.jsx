import React, { useState, useEffect, useContext } from "react";
import { ContextApi } from "../utils/ContextApi";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useContext(ContextApi);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const campaignsList = await getCampaigns();
    setCampaigns(campaignsList);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
