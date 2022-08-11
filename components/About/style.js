import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const AboutWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 210px;
  overflow: hidden;
  z-index: 0;
  padding: 100px 0 1000px 0;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const WrapText = styled.div`
  position: relative;
  height: auto;
  width: 461px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 0;
  margin-left: 276px;

  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const WrapImages = styled.div`
  position: relative;
  height: 856px;
  width: 731px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 0;
  margin-left: 100px;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const WrapSocial = styled.div`
  position: absolute;
  bottom: 50px;
  right: 200px;
  z-index: 30;
  width: 40px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;

  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const WrapIcon = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  height: 835px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-180deg);
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Image1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 368px;
  width: 368px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: grey;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Image2 = styled.div`
  position: absolute;
  z-index: 2;

  top: 120px;
  right: 0;
  height: 475px;
  width: 475px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: lightgray;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Image3 = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 30px;
  height: 432px;
  width: 432px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #cacaca;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Title = styled.h1`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  color: #303145;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Text = styled.p`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  /* tamnoplava */

  color: #303145;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Links = styled.div`
  position: relative;
  width: 97%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  transition: all 1s ease-in-out;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Link = styled.a`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  margin: 0;
  /* tamnoplava */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #303145;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 0;
  &:hover {
    transform: translate(0, -2px);
  }
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
export const Line = styled.div`
  position: absolute;
  width: 261px;
  height: 3px;
  background: #e37958;
  top: 50px;
  transition: all 2s ease-out;

  left: ${(props) => (props.inView ? ` -276px;` : `-576px;`)};
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;

export const Vertical = styled.div`
  position: relative;
  width: 1px;
  height: 12px;
  background-color: #303145;
  bottom: 1px;
  @media only screen and (max-width: 1050px) {
    /* padding-left: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* padding: 65px 0 20px 0; */
  }
`;
