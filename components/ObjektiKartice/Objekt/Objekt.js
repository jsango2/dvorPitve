import {
  WrapObjekt,
  Title,
  Text,
  WrapImage,
  Button,
  Line,
  WrapButton,
  ButtonBack,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Objekt = ({
  title,
  text,
  area,
  bathrooms,
  pets,
  persons,
  bedrooms,
  yob,
}) => {
  return (
    <WrapObjekt>
      <WrapImage></WrapImage>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <WrapButton>
        <Button>BOOK NOW</Button>
        <ButtonBack />
      </WrapButton>
      <Line />
      <ul>
        <li>living area: {area}m2</li>
        <li>Bathrooms: {bathrooms}</li>
        <li>Pets: {pets}</li>
        <li>Persons(max): {persons}</li>
        <li>Bedrooms: {bedrooms}</li>
        <li>Year of build: {yob}</li>
      </ul>
    </WrapObjekt>
  );
};

export default Objekt;
