import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Make sure PropTypes is correctly imported

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [owner, setOwner] = useState("");
  const [signer, setSigner] = useState("");

  return (
    <ContextApi.Provider
      value={{
        owner,
        setOwner,
        signer,
        setSigner,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
