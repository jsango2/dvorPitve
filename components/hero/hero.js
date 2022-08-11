import {
  HeroWrap,
  Linija,
  Title,
  SubTitle,
  Button,
  WrapText,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useInView } from "react-intersection-observer";
import Navbar from "../Navigation/navbar.js";

const Hero = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  });
  return (
    <HeroWrap ref={ref} id="home">
      <Linija />
      <Navbar />
      <WrapText>
        <Title>Dvor Pitve</Title>
        <SubTitle>
          On the stunning island of XXXX, overlooking an beautiful bay, lies the
          villa XXXXX. This magnificent 6 bedroom stone house will amaze you
          with its beauty and comfort.
        </SubTitle>
        <Button>BOOK NOW</Button>
      </WrapText>
    </HeroWrap>
  );
};

export default Hero;
