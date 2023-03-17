import { ButtonWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Button = ({ text, version }) => {
  return <ButtonWrap version={version}>{text}</ButtonWrap>;
};

export default Button;
