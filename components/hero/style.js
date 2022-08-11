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
    /* height: 97vh;
    padding-left: 0; */
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
  margin-top: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  /* identical to box height, or 90px */

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

export const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 44px;
  cursor: pointer;
  /* SUNRISE / White */

  /* Medium Drop */
  margin-top: 30px;
  /* box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08); */
  border: 1px solid white;
  border-radius: 6px;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  } */
  a {
    text-decoration: none;
    color: #035865;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
