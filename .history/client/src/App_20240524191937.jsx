// src/App.js
import { useContext } from "react";
// import CreateCampaign from "./components/CreateCampaign";
// import DisplayCampaigns from "./components/DisplayCampaigns";
// import ConnectWallet from "./components/ConnectWallet";
import { Route, Routes } from "react-router-dom";
import { ContextApi } from "./utils/ContextApi";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  // const { signer } = useContext(ContextApi);

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>

    // <div>
    //   <h1>Crowdfunding DApp</h1>
    //   <ConnectWallet />
    //   {signer && (
    //     <>
    //       <CreateCampaign />
    //       <DisplayCampaigns />
    //     </>
    //   )}
    // </div>
  );
};

export default App;
