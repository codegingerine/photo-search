import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";
import Modal from "Components/Modal";
import { ListStyled } from "./List.styled";

const List = ({ listMapped, className }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalList, setModalList] = useState([]);

  const handleToggleModal = (currentIndex) => {
    setOpenModal(!openModal);
    setModalList(listMapped.filter((_, index) => index === currentIndex));
  };

  const handleToggle = () => setOpenModal(!openModal);

  return (
    <>
      <ListStyled className={className}>
        {listMapped.map(({ id, urls, alt_description }, index) => {
          return (
            <ImageBox
              key={id}
              imgSrc={urls.regular}
              imgAlt={alt_description !== null ? alt_description : ""}
              onClick={() => handleToggleModal(index)}
            />
          );
        })}
      </ListStyled>
      {openModal && (
        <Modal
          isOpen={openModal}
          toggleModal={handleToggle}
          onClose={handleToggle}
          modalListMapped={modalList}
        />
      )}
    </>
  );
};

List.propTypes = {
  listMapped: PropTypes.array.isRequired,
};

export default List;
