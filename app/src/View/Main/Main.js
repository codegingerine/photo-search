import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL, API_KEY } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import MainSearch from "./MainSearch";
import List from "Components/List";

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [randomPhoto, setRandomPhoto] = useState();

  let history = useHistory();

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    fetchRandomPhoto();
  }, []);

  const fetchPhotos = () => {
    fetch(`${BASE_URL}/photos/?client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        console.log("data", data);
      });
  };

  const fetchRandomPhoto = () => {
    fetch(`${BASE_URL}/photos/random/?client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setRandomPhoto(data.urls.regular);
      });
  };

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleClear = () => setQuery("");

  const handleQuery = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search/",
      search: `?query=${query}`,
    });
  };

  return (
    <MainWrapper>
      <MainSearch
        title="Search photos"
        description="Unsplash source of free-usable images."
        onSubmit={handleQuery}
        placeholder="Search free photos"
        value={query}
        onChange={handleInputChange}
        onClose={handleClear}
        backgroundImage={randomPhoto}
      />
      <List listMapped={photos} />
    </MainWrapper>
  );
};

export default Main;
