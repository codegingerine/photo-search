import styled from "styled-components";
import { media } from "Utils/media";

export const ListStyled = styled.div`
  width: 100%;

  ${media.tablet`
    columns: 2;
    column-gap: 24px;
    padding: 0 12px;
  `}

  ${media.desktop`
    max-width: 1320px;
    columns: 3;
    padding: 0 12px;
  `}
`;
