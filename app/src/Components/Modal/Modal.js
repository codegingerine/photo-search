import React from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalContentStyled,
  CloseBoxStyled,
  CloseIconStyled,
} from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalOverlayStyled>
        <ModalStyled>
          <ModalContentStyled>{children}</ModalContentStyled>
        </ModalStyled>
        <CloseBoxStyled onClick={onClose}>
          <CloseIconStyled />
        </CloseBoxStyled>
      </ModalOverlayStyled>,
      modalRoot
    )
  );
};

export default Modal;
