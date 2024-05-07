import React, { useEffect } from "react";
import { useCardContext } from "../context/CardContext";

function CardList() {
  const { storedCards } = useCardContext();

  return storedCards ? (
    <div>
      {storedCards.map((card, key) => (
        <pre className="text-white" key={key}>
          cardName: {card.cardName} &nbsp; cardNumber: {card.cardNumber}
        </pre>
      ))}
    </div>
  ) : (
    <div>Kayıtlı Kart Bulunamadı.</div>
  );
}

export default CardList;
