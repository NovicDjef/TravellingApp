// SharedContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export const useSharedState = () => useContext(SharedContext);

export const SharedProvider = ({ children }) => {
  const [valueDepart, setValueDepart] = useState("");

  return (
    <SharedContext.Provider value={{ valueDepart, setValueDepart }}>
      {children}
    </SharedContext.Provider>
  );
};
