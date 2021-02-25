import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from "Utils/api";
import InfiniteScroll from "Components/InfiniteScroll";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
import {
  SearchStyled,
  SearchTitleStyled,
  SearchBarStyled,
} from "./Search.styled";

const Search = () => {
  const [photos, setPhotos] = useState([]);
  const [initialPhotos, setInitialPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const perPage = 12;

  const prevQueryRef = useRef();

  let history = useHistory();
  const search = useLocation().search;
  const queryParam = new URLSearchParams(search).get("query");

  useEffect(() => {
    if (!queryParam) return;
    setQuery(queryParam);
    fetch(
      `${BASE_URL}/search/photos/?query=${queryParam}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...photos, ...data.results]);
        setTitle(queryParam);
        setPage(page + 1);
      });
    history.push({});
  }, []);

  useEffect(() => {
    prevQueryRef.current = query;
  });

  const prevQuery = prevQueryRef.current;

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    setTitle("");
    setInitialPhotos([]);
    setPhotos([]);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    if (query !== prevQuery) {
      setPhotos([]);
      fetch(
        `${BASE_URL}/search/photos/?query=${query}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setInitialPhotos(data.results);
          setTitle(query);
          setPage(page + 1);
        });
    }
  };

  const fetchPhotos = () => {
    fetch(
      `${BASE_URL}/search/photos/?query=${query}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...photos, ...data.results]);
        setPage(page + 1);
      });
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
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loaderText="Loading..."
        endMessageText="You have seen it all"
      >
        <List listMapped={[...initialPhotos, ...photos]} />
      </InfiniteScroll>
    </MainWrapper>
  );
};

export default Search;
