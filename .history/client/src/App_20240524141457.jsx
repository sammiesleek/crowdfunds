// src/App.js
import { useState } from "react";
import CreateCampaign from "./components/CreateCampaign";
import DisplayCampaigns from "./components/DisplayCampaigns";
import ConnectWallet from "./components/ConnectWallet";

const App = () => {
  // const { owner,signer, setOwner, setSigner } = useContext(ContextApi);

  return (
    <div>
      <h1>Crowdfunding DApp</h1>
      <ConnectWallet />
      {signer && (
        <>
          <CreateCampaign />
          <DisplayCampaigns />
        </>
      )}
    </div>
  );
};

export default App;
