import { createContext, useState } from "react";

export const ContextApi = createContext();
import PropTypes from "prop-types";
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
  children: propTypes.node.isRequired,
};
