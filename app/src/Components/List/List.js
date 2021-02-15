import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";
import Modal from "Components/Modal";
import { ListStyled } from "./List.styled";

const List = ({ listMapped, className }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalList, setModalList] = useState([]);

  const handleOpenModal = (currentIndex) => {
    setOpenModal(true);
    setModalList(listMapped.filter((_, index) => index === currentIndex));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <ListStyled className={className}>
        {listMapped.map(({ id, urls, alt_description }, index) => {
          return (
            <ImageBox
              key={id}
              imgSrc={urls.regular}
              imgAlt={alt_description !== null ? alt_description : ""}
              onClick={() => handleOpenModal(index)}
            />
          );
        })}
      </ListStyled>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        modalListMapped={modalList}
      />
    </>
  );
};

List.propTypes = {
  listMapped: PropTypes.array.isRequired,
};

export default List;
