import styled from "styled-components";
import { media } from "Utils/media";

export const MainStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #afafaf;
  overflow: hidden;
  transition: all 0.2s ease;
`;

export const MainContentStyled = styled.div`
  width: 100%;
  padding: 12px;

  ${media.desktop`
    width: 1320px;
  `}
`;
