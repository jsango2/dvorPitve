import {
  HeroWrap,
  Title,
  WrapText,
  Text,
  Button,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImages,
  WrapImageL,
  WrapImageR,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import useWindowSize from "../useWindowSize.js";
const Marina = () => {
  const size = useWindowSize();
  return <HeroWrap id="marina"></HeroWrap>;
};

export default Marina;
