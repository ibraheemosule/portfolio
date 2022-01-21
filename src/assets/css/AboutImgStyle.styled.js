import styled from "styled-components";
import { HeroImgStyle } from "./HeroImgStyle.styled";

export const AboutImgStyle = styled(HeroImgStyle)`
  padding-top: 50px;
  padding-bottom: 0;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  div {
    border-radius: 52% 87% 30% 75% / 49% 60% 31% 56%;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      object-fit: cover;
      object-position: 0% 0%;
      filter: grayscale(100%);
    }
  }
`;
