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
  .slick-dots {
    top: 9px;
  }
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 43%;
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
  .slick-list {
    z-index: 20;
  }
  .wrapLoaderPrev {
    position: absolute;
    z-index: 20;
    top: 43%;
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

  @media only screen and (max-width: 600px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Container = styled.div`
  position: relative;
  height: 800px;
  width: auto;
  max-width: 1400px;
  /* min-width: 1360px; */

  /* display: flex; */
  /* margin: 0 auto; */
  /* justify-content: space-between;
  align-items: flex-start; */
  /* overflow: scroll; */
  @media only screen and (max-width: 1050px) {
  }
`;
export const WrapArrow = styled.div`
  position: absolute;
  height: auto;
  right: 0;
  top: 60px;
  left: 80%;
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
