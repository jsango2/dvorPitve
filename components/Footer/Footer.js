import {
  HeroWrap,
  SingleLink,
  WrapImage,
  LinkWrap,
  Divider,
  WrapBg,
  Bottom,
  Upper,
  Mid,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Link from "next/link";

import Image from "next/image";

import { Links } from "../Navigation/links.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Lottie from "lottie-react";
import madeBySutra from "./madeBySutra";
import Up from "../../images/footer/bg.png";

const Footer = () => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 92],
      },
    ],
  };
  return (
    <HeroWrap>
      <WrapBg>
        <Image src={Up} alt="slider image" layout="fill" objectFit="cover" />
      </WrapBg>
      <WrapImage>
        <Image src="/footerLogo.svg" alt="Logo" layout="fill" />
      </WrapImage>
      <LinkWrap>
        <SingleLink>Home</SingleLink>
        <Divider />
        <SingleLink>About</SingleLink>
        <Divider />
        <SingleLink>Location</SingleLink>
        <Divider />
        <SingleLink>Contact</SingleLink>
        <Divider />
        <SingleLink>BOOK NOW</SingleLink>
      </LinkWrap>
      <Bottom>
        <Upper>
          <div>Dvor Pitve d.o.o., Pitve 20, 21465 Jelsa</div>
          <Mid>Registarski sud: Trgovački sud u Splitu</Mid>
          <div>IBAN: HR3823400091111175285</div>
        </Upper>
      </Bottom>
    </HeroWrap>
  );
};

export default Footer;
