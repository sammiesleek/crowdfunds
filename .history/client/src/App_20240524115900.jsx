// src/App.js

import CreateCampaign from "./components/createCampaign";
import DisplayCampaigns from "./components/displayCampaigns";

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
