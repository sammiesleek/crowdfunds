import React, { useState, useEffect, useContext } from "react";
import { ContextApi } from "../utils/ContextApi";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { getCampaigns } from "../utils/contract";

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
  }, [owner]);

  // return <DisplayCampaigns title="All Campaigns" isLoading={isLoading} />;
};

export default Home;
