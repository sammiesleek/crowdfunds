import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [owner, setOwner] = useState("");
  const [signer, setsigner] = useState("");

  return (
    <ContextApi.Provider
      value={{
        owner,
        setOwner,
        signer,
        setsigner,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
