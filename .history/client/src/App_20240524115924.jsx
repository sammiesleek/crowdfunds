// src/App.js

import CreateCampaign from "./components/CreateCampaign";
import DisplayCampaigns from "./components/DisplayCampaigns";

const App = () => {
  return (
    <div>
      <h1>Crowdfunding DApp</h1>
      <CreateCampaign />
      <DisplayCampaigns />
    </div>
  );
};

export default App;
