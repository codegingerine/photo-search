import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "Components/InfiniteScroll";
import { BASE_URL, API_KEY } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import MainSearch from "./MainSearch";
import List from "Components/List";

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;

  let history = useHistory();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    fetch(
      `${BASE_URL}/photos/?page=${page}&per_page=${perPage}&client_id=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...photos, ...data]);
        setPage(page + 1);
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
      />
      {photos.length > 0 && (
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchPhotos}
          hasMore={hasMore}
          loaderText="Loading photos..."
          endMessageText="You have seen it all"
        >
          <List listMapped={photos} />
        </InfiniteScroll>
      )}
    </MainWrapper>
  );
};

export default Main;
