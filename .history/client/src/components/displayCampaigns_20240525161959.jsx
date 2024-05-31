import { BigNumber } from "ethers";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import { loader } from "../assets";
import { useContext } from "react";
import { ContextApi } from "../utils/ContextApi";
import PropTypes from "prop-types";
import { ethers } from "ethers";
import { formatEtherValue } from "../utils/Constants";

const DisplayCampaigns = ({ title, isLoading, error }) => {
  const navigate = useNavigate();
  const { campaigns } = useContext(ContextApi);

  const handleNavigate = (campaign, index) => {
    navigate(
      `/campaign-details/${campaign.title}`,
      { state: campaign },
      { index: index }
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <img
          src={loader}
          alt="loader"
          className="w-[100px] h-[100px] object-contain"
        />
      );
    }

    if (error) {
      return <p className="text-red-500">Error fetching campaigns: {error}</p>;
    }

    if (campaigns?.length === 0) {
      return (
        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          You have not created any campaigns yet
        </p>
      );
    }

    return campaigns?.map((campaign, index) => (
      <FundCard
        key={index}
        {...campaign}
        amountCollected={formatEtherValue(campaign.amountCollected)}
        target={formatEtherValue(campaign.target)}
        handleClick={() => handleNavigate(campaign, index)}
        index
      />
    ));
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns?.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {renderContent()}
      </div>
    </div>
  );
};

DisplayCampaigns.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DisplayCampaigns;
