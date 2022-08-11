import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 1100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 1050px) {
  }
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 80%;
  min-width: 1200px;
  display: flex;

  background-color: grey;
  @media only screen and (max-width: 1050px) {
  }
`;
export const Title = styled.h1`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  margin: 40px auto 30px auto;
  /* tamnoplava */

  color: #303145;
  @media only screen and (max-width: 1050px) {
  }
`;
