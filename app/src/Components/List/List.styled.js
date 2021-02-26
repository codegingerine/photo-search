import styled from "styled-components";
import { media } from "Utils/media";

export const ListStyled = styled.div`
  position: relative;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;

  ${media.tablet`
    padding: 0 12px;
  `}

  ${media.desktop`
    max-width: 1320px;
  `}
`;
