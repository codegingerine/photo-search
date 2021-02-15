import styled, { keyframes } from "styled-components";
import { media } from "Utils/media";
import { ReactComponent as CloseIcon } from "Assets/svg/cancel-ico.svg";
import ImageBox from "Components/ImageBox";

const animModalOnShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalOverlayStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  animation: ${animModalOnShow} 0.5s ease-in-out;
  z-index: 99;
`;

export const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  max-width: 90vw;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
`;

export const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin: 32px 0 100px;
  padding: 0 0 24px 0;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
`;

export const ImageBoxStyled = styled(ImageBox)`
  padding: 10px 0;
  margin-bottom: 0;

  ${media.tablet`
    padding: 10px 16px;
  `}
`;

export const ModalBottomStyled = styled.span`
  display: block;
  width: 100%;
  padding: 10px 16px;
`;

export const CloseIconStyled = styled(CloseIcon)`
  display: block;
  width: 10px;
  height: 10px;
  fill: #fff;
  transition: fill 0.2s ease;
`;

export const CloseBoxStyled = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  cursor: pointer;

  &:hover ${CloseIconStyled} {
    fill: #e1e1e1;
  }
`;
