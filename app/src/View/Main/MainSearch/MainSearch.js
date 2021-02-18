import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BASE_URL, API_KEY } from "Utils/api";
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
  const [randomPhoto, setRandomPhoto] = useState("");

  useEffect(() => {
    fetchRandomPhoto();
  }, []);

  const fetchRandomPhoto = () => {
    fetch(`${BASE_URL}/photos/random/?client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setRandomPhoto(data.urls.regular);
      });
  };

  return (
    <MainSearchStyled style={{ backgroundImage: `url(${randomPhoto})` }}>
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
  description: PropTypes.string.isRequired,
};

export default MainSearch;
