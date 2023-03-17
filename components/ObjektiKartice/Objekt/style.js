import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapObjekt = styled.div`
  position: relative;
  height: auto;
  width: 366px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ul {
    padding-left: 20px;
    padding-right: 60px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    /* narancasta */

    color: #a55c3d;
  }

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapImage = styled.div`
  position: relative;
  height: 374px;
  width: 100%;

  background-color: grey;

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

  /* tamnoplava */

  color: #303145;
  margin: 45px 0 15px 0;
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
  height: 205px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Button = styled.div`
  width: 145px;
  height: 44px;
  border: 1px solid #a55c3d;
  border-radius: 6px;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */
  background-color: #ffffff;

  text-align: center;
  z-index: 10;
  /* narancasta */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a55c3d;
  margin-bottom: 30px;
  cursor: pointer;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const ButtonBack = styled.div`
  position: absolute;
  width: 145px;
  height: 44px;
  border: 1px solid #a55c3d;
  border-radius: 6px;

  background-color: #ffffff;

  z-index: -1;
  top: 3px;
  left: 3px;
  cursor: pointer;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapButton = styled.div`
  position: relative;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 333px;
  background-color: #a55c3d;
  margin: 20px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapGalleryLink = styled.div`
  position: absolute;
  height: 53px;
  width: 100%;
  cursor: pointer;
  background: rgba(217, 217, 217, 0.22);
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #303145;
  font-size: 15px;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
