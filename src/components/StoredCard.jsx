import React, { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa6";

function StoredCard({ cardInfo }) {
  const [cardBalance, setCardBalance] = useState(null);

  useEffect(() => {
    async function getBalance() {
      try {
        const res = await fetch(
          `https://openapi.izmir.bel.tr/api/iztek/bakiyesorgulama/${cardInfo.cardNumber}`
        );

        if (res.HataVarMi) {
          throw new Error(`${res.HataMesaj}`);
        }

        const result = await res.json();

        setCardBalance(result.UlasimKartBakiyesi.MevcutBakiye);
      } catch (error) {
        console.log(error);
      }
    }

    getBalance();
  }, []);

  return (
    <div className="my-6 w-full">
      <div className="text-white bg-gradient-to-br from-orange-500 to-pink-500 min-h-36 md:min-h-48 max-w-72 md:max-w-96 rounded-lg md:rounded-xl p-4 flex flex-col items-start justify-between">
        <div className="flex justify-between w-full">
          <div>
            {cardInfo.cardName}
            <div className="text-sm md:text-base">Kart Numarası</div>
            <span className="text-sm md:text-base font-semibold">
              {cardInfo.cardNumber}
            </span>
          </div>

          <FaCreditCard className="text-xl md:text-3xl" />
        </div>
        <div>
          <div className="text-base md:text-lg">Bakiye</div>
          <div className="text-xl md:text-2xl font-semibold">
            {cardBalance} ₺
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoredCard;
