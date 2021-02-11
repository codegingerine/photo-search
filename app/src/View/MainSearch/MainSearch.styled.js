import styled from "styled-components";
import { media } from "Utils/media";

export const MainSearchStyled = styled.div`
  max-width: 864px;
  padding: 32px;

  ${media.tablet`
    padding: 144px 0 152px 0;
  `}
`;

export const MainTitleStyled = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: #FFF;
  margin-bottom: 16px;
`;

export const MainDescriptStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #FFF;
`;