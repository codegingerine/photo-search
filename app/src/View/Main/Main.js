import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import MainSearch from "./MainSearch";
import List from "Components/List";

const Main = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/?client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        console.log(data);
      });
  }, []);

  return (
    <MainWrapper>
      <MainSearch />
      <List listMapped={photos} />
    </MainWrapper>
  );
};

export default Main;
