import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const AboutWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 210px;
  overflow: hidden;
  z-index: 0;
  padding: 100px 0 50px 0;
  @media only screen and (max-width: 1900px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
  @media only screen and (max-width: 1900px) {
  }
  @media only screen and (max-width: 450px) {
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
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapImages = styled.div`
  position: relative;
  height: 1106px;
  width: 731px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 0;
  margin-left: 100px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapSocial = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50px;
  z-index: 30;
  width: 340px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
  color: black;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapIcon = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
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
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Image1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 60px;
  height: 368px;
  width: 308px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: grey;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Image2 = styled.div`
  position: absolute;
  z-index: 2;

  top: 120px;
  right: 0px;
  height: 475px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: lightgray;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Image4 = styled.div`
  position: absolute;
  z-index: 4;

  top: 620px;
  right: 0px;
  height: 475px;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: lightgray;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Image3 = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 316px;
  left: 30px;
  height: 424px;
  width: 382px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #cacaca;
  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
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
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Text = styled.p`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  color: #303145;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Links = styled.div`
  position: relative;
  width: 97%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: black;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #303145;
  height: 100%;
  cursor: pointer;

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: black;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
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
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Vertical = styled.div`
  position: relative;
  width: 1px;
  height: 12px;
  background-color: #303145;
  bottom: 1px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
