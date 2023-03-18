import { useRef, useState, useEffect } from "react";

import {
  AboutWrap,
  WrapText,
  Links,
  Link,
  Title,
  Text,
  Line,
  Vertical,
  WrapImages,
  Image1,
  Image2,
  Image3,
  Image4,
  Overlay,
  WrapSocial,
  WrapIcon,
  WrapBg,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

import Bg from "../../images/about/bgAbout.svg";
import img1 from "../../images/about/1.png";
import img2 from "../../images/about/2.png";
import img3 from "../../images/about/3.png";
import img4 from "../../images/about/4.png";

import { useScrollPercentage } from "react-scroll-percentage";
import useWindowSize from "../useWindowSize.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useInView } from "react-intersection-observer";
import PhotoSlider from "../PhotoSlider/photoSlider.js";

const About = () => {
  // const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [ref2, percentage] = useScrollPercentage({
    threshold: 0,
  });
  return (
    <AboutWrap id="about" ref={ref}>
      <WrapBg>
        <Image src={Bg} alt="Gallery" layout="fixed" />
      </WrapBg>

      <WrapText>
        <Line inView={inView} />
        <Title>About header </Title>
        <Text>
          The first foundations of today’s villas were laid in the 15th century
          during the third Venetian reign, making Dvor Pitve houses at least 6
          centuries old! In the 19th century, the family of captain Niko
          Duboković (Nadalini) decorated and upgraded the existing buildings,
          creating the Duboković-Lučić palaces.
          <br />
          <br /> The members of this family were landowners and shipowners, and
          engaged in agriculture and fishing. At the end of the 19th century,
          captain Niko Duboković became the mayor of Jelsa, which developed from
          the village of Pitve as their main port. Jelsa, along with the town of
          Hvar, is now the main center of the island of Hvar. During the mandate
          of Niko Duboković, thanks to his involvement in growing vineyards and
          exporting local products, Jelsa made a significant economic progress
          and became one of the most advanced municipalities in Austro-Hungarian
          monarchy. <br />
          <br /> Today, many years after captain Niko Duboković and establishing
          the Duboković-Lučić palaces, young locals have renovated these
          centuries-old stone houses and revived their old glory, and thus Dvor
          Pitve was born. During the reconstruction, great attention was paid to
          details and the creation of a pleasant atmosphere, aesthetics and
          quality in indoor and outdoor spaces. The result of the effort are
          newly renovated spacious and pleasant rooms, courtyards, balconies,
          and swimming pools with a view of the mountains and the sea. <br />
          <br /> They were created for relaxation, and facilities such as super
          fast Stalink internet, HD home cinema, garden with vegetables ready to
          be picked, along with the excellent service and the constant
          availability of the host on the premises, make this an ideal getaway
          during the spring, summer, and autumn. Dvor Pitve is today a symbol of
          luxury, an oasis of peace, silence and romance, surrounded by
          vineyards and olive groves, in the mountains and close to the sea. It
          is open to anyone looking for rest and pleasure in villas near nature.
          <br />
          <br />
          Here everything is simpler, calmer, more relaxed, and you can feel the
          history of this unique place, as if time has stopped.
        </Text>
        <Links>
          <Link className="hover-underline-animation">ABOUT PITVE</Link>
          <Vertical />
          <Link className="hover-underline-animation">
            EXPLORE ISLAND BEACHES
          </Link>
          <Vertical />

          <Link className="hover-underline-animation">VILA AMENITIES</Link>
        </Links>
      </WrapText>
      <WrapImages ref={ref2}>
        <WrapSocial>
          <WrapIcon>
            <Image
              src="/instagram.svg"
              width={40}
              height={40}
              alt="instagram"
            />
            <div style={{ marginLeft: "10px" }}>
              Connect with us on Instagram
            </div>
          </WrapIcon>
          <WrapIcon>
            <Image src="/map.svg" alt="location" width={40} height={40} />
            <div style={{ marginLeft: "10px" }}>Locate us on Google Maps</div>
          </WrapIcon>
        </WrapSocial>
        <Image1
          style={{
            transform: `translate(-${percentage * 50}px,${percentage * 50}px )`,
          }}
        >
          {" "}
          <Image src={img1} layout="fill" alt="image1" placeholder="blur" />
        </Image1>
        <Image2
          style={{
            transform: `translate(${percentage * 20}px,-${percentage * 50}px )`,
          }}
        >
          {" "}
          <Image src={img2} layout="fill" alt="image2" placeholder="blur" />
        </Image2>
        <Image4
          style={{
            transform: `translate(-${percentage * 20}px,-${
              percentage * 60
            }px )`,
          }}
        >
          {" "}
          <Image src={img4} layout="fill" alt="image4" placeholder="blur" />
        </Image4>
        <Image3
          style={{
            transform: `translate(${percentage * 40}px,-${percentage * 50}px )`,
          }}
        >
          {" "}
          <Image src={img3} layout="fill" alt="image3" placeholder="blur" />
        </Image3>
      </WrapImages>
    </AboutWrap>
  );
};

export default About;
