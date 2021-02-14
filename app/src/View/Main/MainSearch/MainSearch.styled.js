import styled from "styled-components";
import { media } from "Utils/media";

export const MainSearchStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #afafaf;
  margin-bottom: 48px;
`;

export const MainSearchContentStyled = styled.div`
  width: 100%;
  max-width: 864px;
  padding: 32px;

  ${media.tablet`
    padding: 144px 0 152px 0;
  `}
`;

export const MainTitleStyled = styled.h1`
  font-size: 46px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 16px;
`;

export const MainDescriptStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 24px;
`;
