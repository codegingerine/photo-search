import React, { useState } from "react";
import PropTypes from "prop-types";
import { Masonry } from "masonic";
import ListItem from "./ListItem";
import Modal from "Components/Modal";
import { ListStyled } from "./List.styled";

const List = ({ listMapped, className }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalList, setModalList] = useState([]);

  const handleToggleModal = (currentIndex) => {
    setOpenModal(!openModal);
    setModalList(listMapped.filter((_, index) => index === currentIndex));
  };

  const imageItem = ({ data: { id, urls, alt_description }, index }) => {
    return (
      <ListItem
        key={id}
        imgSrc={urls.regular}
        imgAlt={alt_description !== null ? alt_description : ""}
        onClick={() => handleToggleModal(index)}
      />
    );
  };

  const handleToggle = () => setOpenModal(!openModal);

  return (
    <>
      <ListStyled className={className}>
        <Masonry
          items={listMapped}
          render={imageItem}
          columnGutter={24}
          columnWidth={330}
          style={{ outline: "none" }}
        />
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
