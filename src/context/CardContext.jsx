import React, { useContext, createContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(null);

  const values = { cardInfo, setCardInfo };

  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export const useCardContext = () => useContext(CardContext);
