import styled from "styled-components";

export const PlaninaWrap = styled.div`
  position: relative;

  width: 100%;
  height: 1117px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;

  text-align: center;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapPlaninaUp = styled.div`
  position: absolute;

  top: 0;
  width: 100%;
  height: 1117px;
  z-index: 1;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;

  text-align: center;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapPlaninaDown = styled.div`
  position: absolute;

  bottom: 0;
  width: 100%;
  height: 617px;
  z-index: 3;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;

  text-align: center;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 19%;
  width: 100%;
  height: 1117px;
  z-index: 2;
  top: ${(props) => (props.inView ? ` 16%;` : `45%;`)};
  font-style: normal;
  font-weight: 700;
  font-size: 148px;
  line-height: 142.5%;
  transition: all 2s ease-out;

  text-align: center;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Title = styled.h2`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  color: #303145;
  margin-bottom: 40px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapCol = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 148px;
  line-height: 142.5%;
  text-align: center;
  display: flex;
  a {
    text-decoration: none;
    color: #303145;
    font-weight: 700;
    cursor: pointer;
  }

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Col = styled.div`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: left;

  color: #303145;
  width: 400px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
