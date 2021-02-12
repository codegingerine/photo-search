import React from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";
import { ListStyled } from "./List.styled";

const List = ({ listMapped, className }) => {
  return (
    <ListStyled className={className}>
      {listMapped.map(({ id, urls, alt_description }) => {
        return (
          <ImageBox key={id} imgSrc={urls.regular} imgAlt={alt_description} />
        );
      })}
    </ListStyled>
  );
};

List.propTypes = {
  listMapped: PropTypes.array.isRequired,
};

export default List;
