import React, { useRef } from "react";
import { createPortal } from "react-dom";
import useOnClickOutside from "Utils/useOnClickOutside";
import ModalTop from "./ModalTop";
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalContentStyled,
  ImageBoxStyled,
  ModalBottomStyled,
  CloseBoxStyled,
  CloseIconStyled,
} from "./Modal.styled";

const Modal = ({ isOpen, onClose, modalListMapped, toggleModal }) => {
  const modalRoot = document.getElementById("modal-root");
  const ref = useRef();

  useOnClickOutside(ref, () => toggleModal());
  if (!isOpen) return;

  return (
    isOpen &&
    createPortal(
      <ModalOverlayStyled>
        <ModalStyled ref={(node) => (ref.current = node)}>
          {modalListMapped.map(({ id, urls, alt_description, user }) => {
            return (
              <ModalContentStyled key={id}>
                <ModalTop
                  userImgUrl={user.profile_image.small}
                  userName={user.name}
                  instaName={user.instagram_username}
                  userProfUrl={user.links.html}
                />
                <ImageBoxStyled
                  imgSrc={urls.regular}
                  imgAlt={alt_description !== null ? alt_description : ""}
                />
                {user.location && (
                  <ModalBottomStyled>{user.location}</ModalBottomStyled>
                )}
              </ModalContentStyled>
            );
          })}
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
