"use client";
import { createContext, useContext, useState } from "react";

export const ModalAddPostContext = createContext({
  open: false,
  setOpen: (value: boolean) => {
    open: value;
  },
});

export const useModalAddPost = () => {
  return useContext(ModalAddPostContext);
};

export const ModalAddPostProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalAddPostContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalAddPostContext.Provider>
  );
};
