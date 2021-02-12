import React from "react";
import {
  MainSearchStyled,
  MainSearchContentStyled,
  MainTitleStyled,
  MainDescriptStyled,
} from "./MainSearch.styled";

const MainSearch = () => {
  return (
    <MainSearchStyled>
      <MainSearchContentStyled>
        <MainTitleStyled>Search photos</MainTitleStyled>
        <MainDescriptStyled>
          Unsplash source of free-usable images.
        </MainDescriptStyled>
      </MainSearchContentStyled>
    </MainSearchStyled>
  );
};

export default MainSearch;
