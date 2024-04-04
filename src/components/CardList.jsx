import React, { useEffect } from "react";
import { useCardContext } from "../context/CardContext";

function CardList() {
  const { registeredCards } = useCardContext();

  return <div>CardList</div>;
}

export default CardList;
