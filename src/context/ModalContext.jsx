import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const values = { modalOpen, setModalOpen };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModalOpen = () => useContext(ModalContext);
