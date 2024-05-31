import { ethers } from "ethers";

import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
];
export const formatEtherValue = (value) => {
  // Handle potential errors during formatting
  try {
    return ethers.utils.formatUnits(value, "ether");
  } catch (error) {
    console.error("Error formatting ether value:", error);
    return value; // Fallback if formatting fails
  }
};
export const daysLeft = (deadline) => {
  // Convert the hex string to a decimal timestamp and then to milliseconds
  const inc = parseInt(deadline._hex, 16) * 1000;

  // Calculate the difference between the deadline and the current time
  const difference = inc - Date.now();

  // Calculate the remaining days
  const remainingDays = difference / (1000 * 3600 * 24);

  // Return the number of remaining days, rounded to the nearest whole number
  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
