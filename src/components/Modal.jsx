import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useModalOpen } from "../context/ModalContext";

function Modal() {
  const { setModalOpen } = useModalOpen();
  return (
    <div className="absolute w-full h-full  bg-gray-500 bg-opacity-40 top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-md">
        <Input
          placeholder="Kart İsmi"
          label={"kartekle"}
          className={"text-black"}
        />
        <Input
          placeholder="Kart Numarası"
          label={"kartekle"}
          className={"text-black"}
        />
        <div className="flex gap-4">
          <Button type="button">Ekle</Button>
          <Button type="button" onClick={() => setModalOpen(false)}>
            İptal Et
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
