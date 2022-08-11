import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: absolute;
  z-index: 11;
  height: 800px;
  width: 100%;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 47%;
    left: 100px;
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
    right: 100px;
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
  height: 695px;
  width: 500px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: green;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapPhoto2 = styled.div`
  position: relative;
  height: 695px;
  width: 500px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: blue;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
