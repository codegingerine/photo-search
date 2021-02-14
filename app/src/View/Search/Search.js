import React, { useState } from "react";
import { BASE_URL, API_KEY } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import SearchBar from "Components/SearchBar";
import List from "Components/List";

const Search = () => {
  const [query, setQuery] = useState("");
  const [queryItems, setQueryItems] = useState([]);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleClear = () => setQuery("");

  const handleQuery = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/search/photos/?query=${query}&client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setQueryItems(data.results);
      });
  };

  return (
    <MainWrapper>
      <SearchBar
        onSubmit={handleQuery}
        placeholder="Search free photos"
        value={query}
        onChange={handleInputChange}
        onClose={handleClear}
        type="medium"
      />
      <List listMapped={queryItems} />
    </MainWrapper>
  );
}

export default Search;
