import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    height: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 80%;
  min-width: 1200px;
  display: flex;

  @media only screen and (max-width: 1050px) {
  }
`;
export const Grid = styled.div`
  display: grid;
  z-index: 10;
  margin: 0 auto;
  padding-left: 50px;
  width: 80%;
  height: 300px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 4 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 4 / 4;
  }
  .div4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div5 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .div6 {
    grid-area: 2 / 1 / 4 / 2;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    height: auto;
    width: 95%;
    padding-left: 20px;

    div {
      padding-right: 0px;
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 3 / 3;
    }
    .div3 {
      grid-area: 3 / 2 / 5 / 3;
    }
    .div4 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div5 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div6 {
      grid-area: 4 / 1 / 6 / 2;
    }
  }
`;
export const WrapImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;

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
  margin: 90px auto 30px auto;

  color: #303145;
  @media only screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #303145;
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: "Civane-NorLig";
  font-weight: 100;
  font-size: 15px;
  line-height: 21px;

  color: #303145;
  ul {
    padding-left: 10px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }
`;
