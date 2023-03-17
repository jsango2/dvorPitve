import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding-bottom: 0px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapObjects = styled.div`
  position: relative;
  width: 80%;
  min-width: 1150px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapImageDivider = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
  margin-top: 100px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
