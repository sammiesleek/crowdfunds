import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { thirdweb } from "../assets";
import Loader from "../components/Loader";
import {
  calculateBarPercentage,
  daysLeft,
  formatEtherValue,
} from "../utils/Constants";
import { ContextApi } from "../utils/ContextApi";
import CountBox from "../components/CountBox";
import Donate from "../components/Donate";

const CampaignDetails = () => {
  const { state } = useLocation();
  // const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  // const remainingDays = daysLeft(state.deadline);
  console.log(state);
  return (
  
  );
};

export default CampaignDetails;
