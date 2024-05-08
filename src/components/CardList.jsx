import React from "react";
import { useCardContext } from "../context/CardContext";
import StoredCard from "./StoredCard";

function CardList() {
  const { storedCards } = useCardContext();

  return storedCards ? (
    <div className="w-full">
      {storedCards.map((card, key) => (
        <StoredCard key={key} cardInfo={card} />
      ))}
    </div>
  ) : (
    <div className="text-white">Kayıtlı Kart Bulunamadı.</div>
  );
}

export default CardList;
