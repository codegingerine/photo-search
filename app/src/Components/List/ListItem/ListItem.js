import React from "react";
import ImageBox from "Components/ImageBox";
import { ListItemStyled } from "./ListItem.styled";

const ListItem = ({ imgSrc, imgAlt, onClick }) => {
  return (
    <>
      <ListItemStyled>
        <ImageBox imgSrc={imgSrc} imgAlt={imgAlt} onClick={onClick} />
      </ListItemStyled>
    </>
  );
};

export default ListItem;
