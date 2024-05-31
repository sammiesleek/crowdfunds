import React, { useState, useEffect, useContext } from "react";
import { ContextApi } from "../utils/ContextApi";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { owner, setCampaigns } = useContext(ContextApi);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const campaignsList = await getCampaigns();
    setCampaigns(campaignsList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCampaigns();
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
