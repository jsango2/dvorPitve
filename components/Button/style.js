import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 44px;
  padding: 0 40px;
  cursor: pointer;
  z-index: 3;
  margin-top: 30px;
  border: ${(props) =>
    props.version === "dark" ? "1px solid #A55C3D" : "1px solid white"};
  border-radius: 6px;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  transition: all 0.2s ease-in-out;
  text-align: center;

  color: ${(props) => (props.version === "dark" ? "#A55C3D" : "#f5faff")};

  a {
    text-decoration: none;
    color: #035865;
  }

  &:hover {
    background-color: #a55c3d;
    color: white;
    border: none;
  }
  &:active {
    background-color: #303145;
    color: white;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
