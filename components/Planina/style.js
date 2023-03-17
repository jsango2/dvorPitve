import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const PlaninaWrap = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 1117px;

  /* SUNRISE / White */

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  /* color: #f5faff; */

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapPlaninaUp = styled.div`
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  top: 0;
  width: 100%;
  height: 1117px;
  z-index: 1;
  /* SUNRISE / White */

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  /* color: #f5faff; */

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapPlaninaDown = styled.div`
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  bottom: 0;
  width: 100%;
  height: 1117px;
  z-index: 3;
  /* SUNRISE / White */

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  /* color: #f5faff; */

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  top: 19%;
  width: 100%;
  height: 1117px;
  z-index: 2;
  /* SUNRISE / White */
  top: ${(props) => (props.inView ? ` 16%;` : `45%;`)};
  font-style: normal;
  font-weight: 700;
  font-size: 148px;
  line-height: 142.5%;
  /* identical to box height, or 26px */
  transition: all 2s ease-out;

  text-align: center;

  /* SUNRISE/Sunray */

  /* color: #f5faff; */

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
  color: #303145;
  margin-bottom: 40px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapCol = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 148px;
  line-height: 142.5%;
  text-align: center;
  display: flex;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Col = styled.div`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: left;
  /* tamnoplava */

  color: #303145;
  width: 400px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
