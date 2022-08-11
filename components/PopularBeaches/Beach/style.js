import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 326px;

  padding-top: 50px;
  padding-bottom: 70px;
  /* padding-left: 88px; */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 600px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  height: 326px;
  width: 326px;
  background: #cdcdcd;
  border-radius: 17px 17px 0px 0px;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Line = styled.div`
  position: relative;
  height: 3px;
  width: 54px;

  background-color: #a55c3d;
  margin: 30px 0 15px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Title = styled.h3`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  /* tamnoplava */
  width: 47%;
  color: #303145;
  margin: 0px 0 15px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Text = styled.p`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  /* tamnoplava */

  color: #303145;
  width: 90%;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
