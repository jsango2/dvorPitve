import {
  Wrap,
  WrapBg,
  Overlay,
  Title,
  Data,
  Tel,
  Email,
  Adress,
  Name,
  Num,
  Buttons,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Up from "../../images/contact/bg.png";

import { useInView } from "react-intersection-observer";
import Button from "../Button/index.js";

const Contact = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    // trigger inView function only once
    triggerOnce: false,
  });
  return (
    <Wrap>
      <Overlay />
      <WrapBg>
        <Image src={Up} alt="slider image" layout="fill" objectFit="cover" />
      </WrapBg>
      <Title>Contact us</Title>
      <Data>
        <Email>
          <Name>EMAIL</Name>
          <Num>dvorpitve@gmail.com</Num>
        </Email>

        <Tel>
          <Name>TELEPHONE</Name>
          <Num>+385 98 965 6320</Num>
        </Tel>

        <Adress>
          <Name>ADDRESS</Name>
          <Num>
            Pitve 20
            <br /> 21465 Jelsa <br /> Croatia
          </Num>
        </Adress>
      </Data>
      <Buttons>
        <Button text="BOOK YOUR STAY" />
        <Button text="OPEN IN GOOGLE MAPS" />
      </Buttons>
    </Wrap>
  );
};

export default Contact;
