import React from "react";
import ReactDOM from "react-dom";
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

const Modal = ({ isOpen, onClose, modalListMapped }) => {
  const modalRoot = document.getElementById("modal-root");

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalOverlayStyled>
        <ModalStyled>
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
