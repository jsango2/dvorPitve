import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 710px;
  width: 100%;
  padding-top: 217px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #a55c3d;
  align-items: center;
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapImage = styled.div`
  position: relative;
  height: 179px;
  width: 179px;
  z-index: 4;
  @media only screen and (max-width: 420px) {
  }
`;

export const LinkWrap = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  width: 767px;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 420px) {
  }
`;

export const SingleLink = styled.div`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  width: 115px;
  color: #c6c6c6;
  text-align: center;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
  }
`;

export const Divider = styled.div`
  position: relative;
  top: 3px;
  height: 16px;
  width: 1px;
  background-color: #c6c6c6;
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Bottom = styled.div`
  position: absolute;
  width: 100%;
  height: 142px;
  bottom: 0;
  z-index: 3;
  background: #303145;
  opacity: 0.88;
  padding-top: 30px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Upper = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Mid = styled.div`
  position: relative;
  padding: 0 30px;
  margin: 0 30px;
  border-left-style: solid;
  border-right-style: solid;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
