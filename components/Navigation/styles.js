import styled from "styled-components";

export const NavbarWrap = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;

  height: 96px;
  display: flex;
  align-items: center;
  top: 0;
  right: 90px;
  margin-left: auto;
  @media screen and (max-width: 1050px) {
    width: 100vw;
    padding-right: 40px;
    height: 0;
  }
`;
export const LogoWrap = styled.div`
  position: relative;
  width: 170px;
  min-width: 170px;
  height: 170px;
  z-index: 20;
  cursor: pointer;
  background-color: #303145;
  left: 300px;
  top: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s ease-in-out;
  transform: ${(props) =>
    props.inView ? `translate(0%,0%)` : `translate(0,-100%)`};
  -webkit-box-shadow: 0px 0px 29px -2px #000000;
  box-shadow: 0px 0px 9px -2px #000000;
  @media screen and (max-width: 1051px) {
    top: 80px;
    left: 25%;
  }
`;

export const LinkWrap = styled.div`
  margin-left: auto;
  position: relative;
  width: 490px;
  min-width: 490px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1051px) {
    display: none;
  }
`;
export const Hamburger = styled.div`
  position: absolute;
  z-index: 4;
  right: 40px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  top: 37px;
  @media screen and (min-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    right: 25px;
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 4;
  top: 52px;
  right: 40px;
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
export const LineX1 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const LineX2 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(315deg) translate(6px, -7px);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const Line = styled.div`
  height: 3px;
  width: 23px;
  background-color: white;
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  /* text-transform: uppercase; */
  text-decoration: none;
  color: #aea8b2;
  margin: 0 0;
  cursor: pointer;
  a {
    /* text-transform: uppercase; */
    text-decoration: none;
    color: white;
    margin: 0 0;
    cursor: pointer;
    font-family: "Civane-NorMed";
  }
  a:hover {
    color: #a55c3d;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`;
