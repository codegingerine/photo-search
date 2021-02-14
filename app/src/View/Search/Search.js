import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
import {
  SearchStyled,
  SearchTitleStyled,
  SearchBarStyled,
} from "./Search.styled";

const Search = () => {
  const [query, setQuery] = useState("");
  const [queryItems, setQueryItems] = useState([]);
  const [title, setTitle] = useState("");
  let history = useHistory();

  const search = useLocation().search;
  const queryParam = new URLSearchParams(search).get("query");

  useEffect(() => {
    queryParam && setQuery(queryParam);
  }, []);

  useEffect(() => {
    queryParam &&
      fetch(
        `${BASE_URL}/search/photos/?query=${queryParam}&client_id=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setQueryItems(data.results);
          setTitle(queryParam);
        });
  }, []);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleClear = () => setQuery("");

  const handleQuery = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/search/photos/?query=${query}&client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setQueryItems(data.results);
        setTitle(query);
      });
    history.push(`/search/?query=${query}`);
  };

  return (
    <MainWrapper>
      <SearchStyled>
        <SearchBarStyled
          onSubmit={handleQuery}
          placeholder="Search free photos"
          value={query}
          onChange={handleInputChange}
          onClose={handleClear}
          type="medium"
        />
        <SearchTitleStyled>{title}</SearchTitleStyled>
      </SearchStyled>
      <List listMapped={queryItems} />
    </MainWrapper>
  );
};

export default Search;
