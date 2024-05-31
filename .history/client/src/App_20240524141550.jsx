// src/App.js
import { useContext } from "react";
import CreateCampaign from "./components/CreateCampaign";
import DisplayCampaigns from "./components/DisplayCampaigns";
import ConnectWallet from "./components/ConnectWallet";
import { ContextApi } from "./utils/ContextApi";

const App = () => {
  const { signer } = useContext(ContextApi);

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
