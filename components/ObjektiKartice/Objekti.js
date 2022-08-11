import { HeroWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Objekt from "./Objekt/Objekt";

const Objekti = () => {
  return (
    <HeroWrap>
      <Objekt
        title="HOUSE 1 NAME"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan"
        area="285"
        bathrooms="4"
        pets="Allowed"
        persons="12"
        bedrooms="6"
        yob="2004"
      />
      <Objekt
        title="HOUSE 2 NAME"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        area="285"
        bathrooms="4"
        pets="Allowed"
        persons="12"
        bedrooms="6"
        yob="2004"
      />{" "}
      <Objekt
        title="HOUSE 3 NAME"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        area="285"
        bathrooms="4"
        pets="Allowed"
        persons="12"
        bedrooms="6"
        yob="2004"
      />
    </HeroWrap>
  );
};

export default Objekti;
