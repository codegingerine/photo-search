import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "Assets/svg/search-ico.svg";
import { ReactComponent as CloseIcon } from "Assets/svg/cancel-ico.svg";

export const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  color: #111;
  font-size: 14px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  background: none;
  border: none;
  padding: 1px 62px 1px 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ type }) => css`
    ${type === "large" &&
    css`
      height: 54px;
      border-radius: 4px;
      background: #fff;
    `}
    ${type === "medium" &&
    css`
      height: 38px;
      border-radius: 24px;
      background: #eee;
    `}
  `}
`;

export const SearchIcontyled = styled(SearchIcon)`
  display: block;
  width: 18px;
  height: 18px;
  fill: #767676;
  transition: fill 0.2s ease;
`;

export const SearchButtonStyled = styled.button`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 38px;
  height: 100%;
  border: 0;
  background: none;
  padding: 0px 6px 0px;

  &:hover ${SearchIcontyled} {
    fill: #111;
  }
`;

export const CloseIconStyled = styled(CloseIcon)`
  display: block;
  width: 10px;
  height: 10px;
  fill: #767676;
  transition: fill 0.2s ease;
`;

export const CloseBoxStyled = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  right: 0;
  cursor: pointer;

  &:hover ${CloseIconStyled} {
    fill: #111;
  }
`;
