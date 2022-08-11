import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;

  overflow: hidden;

  padding-top: 50px;
  /* padding-bottom: 70px; */
  /* padding-left: 88px; */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 90%;
  max-width: 1400px;

  min-width: 1360px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media only screen and (max-width: 1050px) {
  }
`;
export const Title = styled.h3`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;

  /* tamnoplava */

  color: #303145;
  margin: 0px 0 15px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
