import React, { useState } from "react";
import MainWrapper from "Components/MainWrapper";
import { MainSearchStyled, MainTitleStyled, MainDescriptStyled } from "./MainSearch.styled";

const MainSearch = () => {
  return (
    <MainWrapper>
      <MainSearchStyled>
        <MainTitleStyled>Unsplash</MainTitleStyled>
        <MainDescriptStyled>The internet’s source of freely-usable images.</MainDescriptStyled>
        <MainDescriptStyled>Powered by creators everywhere.</MainDescriptStyled>
      </MainSearchStyled>
    </MainWrapper>
  );
};

export default MainSearch;
