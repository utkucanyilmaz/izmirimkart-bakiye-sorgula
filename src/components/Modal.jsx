import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useModalOpen } from "../context/ModalContext";
import { useCardContext } from "../context/CardContext";

function Modal() {
  const { setModalOpen } = useModalOpen();
  const { storedCards, setStoredCards } = useCardContext();
  const [cardName, setCardName] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);

  const addCard = () => {};

  const cancel = () => {
    setModalOpen(false);
  };

  const handleCardNameChange = e => {
    setCardName(e.target.value);
  };
  const handleCardNumberChange = e => {
    setCardNumber(e.target.value);
  };

  return (
    <div className="absolute w-full h-full  bg-gray-500 bg-opacity-40 top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-md flex flex-col space-y-4">
        <Input
          desc={"Kart İsmi"}
          label={"kartismi"}
          onInputChange={handleCardNameChange}
        />
        <Input
          desc={"Kart Numarası"}
          label={"kartnumarasi"}
          onInputChange={handleCardNumberChange}
        />
        <div className="flex items-center justify-center gap-x-4">
          <Button type="button" onClick={addCard}>
            Ekle
          </Button>
          <Button type="button" onClick={cancel}>
            İptal Et
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
