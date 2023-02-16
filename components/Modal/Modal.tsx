import React, { ReactElement, useEffect } from "react";
import { CloseIcon } from "../../icons/closeIcon";
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  RModal,
  StyledCloseIcon,
} from "./styled";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  open: boolean;
}

const Modal = ({ children, title, onClose, open }: ModalProps) => {
  if (!open) {
    return null;
  }
  const closeModal = () => {
    onClose();
  };
  return (
    <RModal
      isOpen={open}
      appElement={document.getElementById("__next") || undefined}
      onRequestClose={() => {
        closeModal();
      }}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#33333391",
          zIndex: 1001,
        },
      }}
    >
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <StyledCloseIcon onClick={closeModal}>
          <CloseIcon />
        </StyledCloseIcon>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </RModal>
  );
};

export default Modal;
