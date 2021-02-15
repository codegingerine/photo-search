import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";
import Modal from "Components/Modal";
import { ListStyled } from "./List.styled";

const List = ({ listMapped, className }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
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
              onClick={handleOpenModal}
            />
          );
        })}
      </ListStyled>
      <Modal isOpen={openModal} onClose={handleCloseModal} />
    </>
  );
};

List.propTypes = {
  listMapped: PropTypes.array.isRequired,
};

export default List;
