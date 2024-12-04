import { useState } from "react";
import { ColumnResizeMode } from "@tanstack/react-table";

interface ModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
interface FuncState {
  funcType: boolean;
  addOn: () => void;
  editOn: () => void;
}
interface ActiveIdState {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

interface UseManagementModel {
  modalState: ModalState;
  funcState: FuncState;
  activeIdState: ActiveIdState;
  columnResizeMode: ColumnResizeMode;
}

export function useManagementModel(): UseManagementModel {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [activeId, setActiveId] = useState<number>(1);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const editOn = () => {
    setIsAdd(false);
  };

  const addOn = () => {
    setIsAdd(true);
  };

  return {
    modalState: { isOpen, open, close },
    funcState: { funcType: isAdd, addOn, editOn },
    activeIdState: { activeId, setActiveId },
    columnResizeMode,
  };
}
