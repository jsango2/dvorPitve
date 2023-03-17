import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;

  /* overflow: hidden; */

  padding-top: 123px;
  /* padding-bottom: 70px; */
  /* padding-left: 88px; */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 38%;
    right: -66px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: black;
  }
  .loaderNext {
    border: 2px solid #f3f3f349;
    border-radius: 50%;
    border-top: 2px solid #ffffffb4;

    width: 60px;
    height: 60px;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;
  }
  .wrapLoaderPrev {
    position: absolute;
    z-index: 20;
    top: 38%;
    left: -66px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: black;
  }
  .loaderPrev {
    border: 2px solid #f3f3f349;
    border-radius: 50%;
    border-top: 2px solid #ffffffb4;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;
  }
  .arrow {
    position: absolute;
    top: 19px;
    left: 19px;
    opacity: 1;
  }
  .slick-dots {
    top: 9px;
  }
  .slick-list {
    z-index: 20;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const DistancesLocationsWrap = styled.div`
  position: relative;
  height: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  color: #000000;
  li::marker {
    color: #a55c3d;
  }
  margin-bottom: 90px;
  @media only screen and (max-width: 1050px) {
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

export const Left = styled.div`
  position: relative;

  @media only screen and (max-width: 1050px) {
  }
`;
export const Right = styled.div`
  position: relative;

  @media only screen and (max-width: 1050px) {
  }
`;

export const WrapList = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 1050px) {
  }
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 90%;
  max-width: 1400px;
  min-width: 1360px;
  margin: 0 auto;

  @media only screen and (max-width: 1050px) {
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
    /* padding: 65px 0 20px 0; */
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
