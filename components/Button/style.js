import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const ButtonWrap = styled.div`
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
  border: ${(props) =>
    props.version === "dark" ? "1px solid #A55C3D" : "1px solid white"};
  border-radius: 6px;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */
  transition: all 0.2s ease-in-out;
  text-align: center;

  /* SUNRISE/Sunray */

  /* color: #f5faff; */
  color: ${(props) => (props.version === "dark" ? "#A55C3D" : "#f5faff")};
  /* &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  } */
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
