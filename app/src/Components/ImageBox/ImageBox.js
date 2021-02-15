import React from "react";
import PropTypes from "prop-types";
import { ImageBoxStyled, ImageStyled } from "./ImageBox.styled";

const ImageBox = ({ imgSrc, imgAlt, className, onClick }, ...rest) => {
  return (
    <ImageBoxStyled className={className} onClick={onClick} {...rest}>
      <ImageStyled src={imgSrc} alt={imgAlt} />
    </ImageBoxStyled>
  );
};

ImageBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ImageBox;
