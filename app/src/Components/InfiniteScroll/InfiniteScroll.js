import React from "react";
import InfiniteScroller from "react-infinite-scroll-component";
import Loader from "Components/Loader";
import { InfiniteScrollStyled, MessageStyled } from "./InfiniteScroll.styled";

const InfiniteScroll = ({
  dataLength,
  next,
  hasMore,
  loaderText,
  endMessageText,
  children,
}) => {
  return (
    <InfiniteScrollStyled>
      <InfiniteScroller
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={<Loader loaderMsg={loaderText} />}
        endMessage={<Loader loaderMsg={endMessageText} />}
      >
        {children}
      </InfiniteScroller>
    </InfiniteScrollStyled>
  );
};

export default InfiniteScroll;
