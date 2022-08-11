import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 542px;
  width: 100%;
  padding-top: 57px;
  width: 100%;
  height: 545px;
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

  @media only screen and (max-width: 420px) {
  }
`;

export const LinkWrap = styled.div`
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
