import React, { useState, useEffect, useContext } from "react";
import { ContextApi } from "../utils/ContextApi";
import DisplayCampaigns from "../components/DisplayCampaignsold";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useContext(ContextApi);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    // <DisplayCampaigns
    //   title="All Campaigns"
    //   isLoading={isLoading}
    //   campaigns={campaigns}
    // />
  );
};

export default Home;
