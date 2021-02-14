import React from "react";
import PropTypes from "prop-types";
import SearchBar from "Components/SearchBar";
import {
  MainSearchStyled,
  MainSearchContentStyled,
  MainTitleStyled,
  MainDescriptStyled,
} from "./MainSearch.styled";

const MainSearch = ({
  title,
  description,
  onSubmit,
  placeholder,
  value,
  onChange,
  onClose,
}) => {
  return (
    <MainSearchStyled>
      <MainSearchContentStyled>
        <MainTitleStyled>{title}</MainTitleStyled>
        <MainDescriptStyled>{description}</MainDescriptStyled>
        <SearchBar
          onSubmit={onSubmit}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClose={onClose}
        />
      </MainSearchContentStyled>
    </MainSearchStyled>
  );
};

MainSearch.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MainSearch;
