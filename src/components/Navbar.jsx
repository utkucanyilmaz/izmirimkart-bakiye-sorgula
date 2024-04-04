import React, { useEffect } from "react";
import { useModalOpen } from "../context/ModalContext";
import Button from "./Button";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function Navbar() {
  const { modalOpen, setModalOpen } = useModalOpen();
  function handleModalClick() {
    setModalOpen(prev => !prev);
  }

  return (
    <>
      <nav className="flex items-center justify-between text-white bg-gray-900 p-6">
        <h1 className="text-base md:text-3xl">İzmirim Kart Bakiye Sorgula</h1>

        <Button type={"button"} onClick={handleModalClick}>
          Kart Ekle
        </Button>
      </nav>
      {modalOpen && createPortal(<Modal />, document.body)}
    </>
  );
}

export default Navbar;
