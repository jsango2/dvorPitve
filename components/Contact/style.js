import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 435px;
  padding-top: 80px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #303145;
  opacity: 0.88;
  top: 0;
  z-index: 2;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  margin-bottom: 36px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Name = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
  margin-bottom: 15px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Num = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #ffffff;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Data = styled.div`
  position: relative;
  display: flex;
  z-index: 3;
  margin: 0 auto;
  width: 700px;
  justify-content: space-between;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Tel = styled.div`
  position: relative;
  width: 33%;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Adress = styled.div`
  position: relative;
  width: 33%;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Email = styled.div`
  position: relative;
  width: 33%;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Buttons = styled.div`
  position: relative;
  display: flex;
  width: 550px;
  margin: 15px auto 0 auto;
  justify-content: space-between;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
