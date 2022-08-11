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
  Overlay,
  WrapSocial,
  WrapIcon,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

import Bg from "../../images/about/bg.png";
import Fb from "../../public/facebook.svg";
import Ig from "../../public/instagram.svg";
import Ln from "../../public/linkedin.svg";
import { useScrollPercentage } from "react-scroll-percentage";
import useWindowSize from "../useWindowSize.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useInView } from "react-intersection-observer";
import PhotoSlider from "../PhotoSlider/photoSlider.js";

const About = () => {
  const size = useWindowSize();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    // trigger inView function only once
    triggerOnce: true,
  });
  console.log(inView);
  // const [ref, percentage] = useScrollPercentage({
  //   /* Optional options */
  //   threshold: 0,
  // });
  // console.log(`Percentage scrolled: ${percentage * 100}%.`);
  return (
    <AboutWrap id="about" ref={ref}>
      <Image src={Bg} alt="Gallery" layout="fill" />

      <WrapText>
        <Line inView={inView} />
        <Title>About header</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. <br />
          <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Links>
          <Link>ABOUT PITVE</Link>
          <Vertical />
          <Link>EXPLORE ISLAND BEACHES</Link>
          <Vertical />

          <Link>VILA AMENITIES</Link>
        </Links>
      </WrapText>
      <WrapImages>
        <WrapSocial>
          <WrapIcon>
            <Image src="/facebook.svg" width={40} height={40} alt="facebook" />
          </WrapIcon>
          <WrapIcon>
            <Image
              src="/instagram.svg"
              width={40}
              height={40}
              alt="instagram"
            />
          </WrapIcon>
          <WrapIcon>
            <Image src="/linkedin.svg" alt="linkedIn" width={40} height={40} />
          </WrapIcon>
        </WrapSocial>
        <Image1 />
        <Image2 />
        <Image3 />
      </WrapImages>
      <Overlay />
      <PhotoSlider />
    </AboutWrap>
  );
};

export default About;
