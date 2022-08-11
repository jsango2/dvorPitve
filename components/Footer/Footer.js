import { HeroWrap, SingleLink, WrapImage, LinkWrap, Divider } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Link from "next/link";

import Image from "next/image";
import Left from "../../images/marina/left.png";
import Logo from "../../images/logo.png";
import { Links } from "../Navigation/links.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Lottie from "lottie-react";
import madeBySutra from "./madeBySutra";

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
    </HeroWrap>
  );
};

export default Footer;
