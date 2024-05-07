import React, { useContext, createContext, useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(null);
  const [storedCards, setStoredCards] = useState(
    JSON.parse(localStorage.getItem("cards")) ?? null
  );

  console.log(storedCards);
  const values = { cardInfo, setCardInfo, storedCards, setStoredCards };

  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export const useCardContext = () => useContext(CardContext);
