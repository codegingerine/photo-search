import styled from "styled-components";
import { media } from "Utils/media";
import SearchBar from "Components/SearchBar";

export const SearchBarStyled = styled(SearchBar)`
  position: relative;
  max-width: 800px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 12px;

  ${media.tablet`
    padding: 60px 12px 72px;
  `}

  ${media.desktop`
    max-width: 1320px;
  `}
`;

export const SearchTitleStyled = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #111;
  margin: 40px 0 16px;

  &:first-letter {
    text-transform:capitalize;
  }
`;
