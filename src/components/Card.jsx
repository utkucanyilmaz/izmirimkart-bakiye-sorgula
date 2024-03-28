import React from "react";
import { useCardContext } from "../context/CardContext";

function Card() {
  const { cardInfo } = useCardContext();
  console.log(cardInfo);

  return cardInfo ? (
    cardInfo.Message ? (
      <div className="text-white text-lg">{cardInfo.Message}</div>
    ) : cardInfo.HataVarMi ? null : (
      <div className="my-12">
        <div className="text-white bg-gradient-to-br from-orange-500 to-pink-500 h-48 w-96 rounded-xl p-4 flex flex-col items-start justify-between">
          <div>
            <span className="block text-2xl font-semibold">Mevcut Bakiye</span>
            <span className="block text-lg font-medium">
              {cardInfo.UlasimKartBakiyesi.MevcutBakiye} TL
            </span>
          </div>

          <span>{cardInfo.UlasimKartBakiyesi.UlasimKartiNumarasi}</span>
        </div>
      </div>
    )
  ) : null;
}

export default Card;
