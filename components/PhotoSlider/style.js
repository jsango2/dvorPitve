import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 11;
  height: 950px;
  width: 100%;
  /* bottom: 120px; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  .slick-list {
    height: 850px;
  }
  .slick-dots {
    bottom: 55px;
  }
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 47%;
    right: 100px;
    cursor: pointer;
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
    top: 47%;
    left: 100px;
    cursor: pointer;
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
    opacity: 0.7;
  }
  .photoSlider {
    width: 100% !important ;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  /* height: 900px; */
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 56%;

  /* height: 500px !important;
  object-fit: contain; */

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
