import React from "react";
import { useCardContext } from "../context/CardContext";
import { FaCreditCard } from "react-icons/fa6";

function Card() {
  const { cardInfo } = useCardContext();
  return cardInfo ? (
    cardInfo.Message ? (
      <div className="text-white text-lg w-full">{cardInfo.Message}</div>
    ) : cardInfo.HataVarMi ? null : (
      <div className="my-6 w-full">
        <div className="text-white bg-gradient-to-br from-orange-500 to-pink-500 min-h-36 md:min-h-48 max-w-72 md:max-w-96 rounded-lg md:rounded-xl p-4 flex flex-col items-start justify-between">
          <div className="flex justify-between w-full">
            <div>
              <div className="text-sm md:text-base">Kart Numarası</div>
              <span className="text-sm md:text-base font-semibold">
                {cardInfo.UlasimKartBakiyesi.UlasimKartiNumarasi}
              </span>
            </div>

            <FaCreditCard className="text-xl md:text-3xl" />
          </div>
          <div>
            <div className="text-base md:text-lg">Bakiye</div>
            <div className="text-xl md:text-2xl font-semibold">
              {cardInfo.UlasimKartBakiyesi.MevcutBakiye} ₺
            </div>
          </div>
        </div>
      </div>
    )
  ) : null;
}

export default Card;
