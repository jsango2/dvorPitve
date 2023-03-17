import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 995px;
  width: 100%;
  background-color: #035865;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);

  z-index: 1;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Linija = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 1px;
  background-color: white;
  top: 96px;
  left: 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapText = styled.div`
  position: relative;
  z-index: 20;
  width: 474px;
  height: auto;
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h1`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 140.02%;

  letter-spacing: -0.01em;

  color: #ffffff;
  margin: 20px 0;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SubTitle = styled.p`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
