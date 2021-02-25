import React from 'react';
import { LoaderStyled, LoaderTxtStyled } from "./Loader.styled";

const Loader = ({ loaderMsg }) => {
  return (
    <LoaderStyled>
      <LoaderTxtStyled>{loaderMsg}</LoaderTxtStyled>
    </LoaderStyled>
  );
}

export default Loader;
