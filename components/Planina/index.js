import {
  PlaninaWrap,
  WrapPlaninaUp,
  WrapPlaninaDown,
  WrapText,
  Title,
  WrapCol,
  Col,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Up from "../../images/Planine/planinaBgGori.png";
import Down from "../../images/Planine/planinaBgDoli.png";
import { useInView } from "react-intersection-observer";

const Planina = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    // trigger inView function only once
    triggerOnce: false,
  });
  return (
    <PlaninaWrap>
      <WrapPlaninaUp>
        {" "}
        <Image src={Up} alt="slider image" layout="fill" objectFit="cover" />
      </WrapPlaninaUp>
      <WrapText ref={ref} inView={inView}>
        <Title>Suggested activities</Title>
        <WrapCol>
          <Col>
            <ul>
              <li>
                <b>Hiking on the nearby mountains</b> - To the highest peak of
                the island of Hvar, Sv. Nikola (626 meters)
              </li>
              <li>
                <b>Free climbing </b> // Pitve free climbing route and numerous
                other nearby locations with maintained climbing routes, e.g. Sv.
                Nedjelja
              </li>
              <li>
                <b>Cycling paths throughout the island </b> // Bike tour by Hvar
                Adventures
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Diving in Jelsa and Vrboska // Black Pearl Diving Center</li>
              <li>Fish trip or rent a boat in Jelsa</li>
              <li>Medvid Bod cave trip, snorkeling and swimming</li>
              <li>
                Wine tasting // Try the finest variety of island grapes, e.g.
                Tomić Winery
              </li>
            </ul>
          </Col>

          <Col>
            <ul>
              <li>
                {" "}
                Meditation in Pitve // A beautiful view of the Hvar canal, Jelsa
                and its surroundings, the entire island of Brač, Makarska coast
                and the mountain Biokovo
              </li>
              <li>Yoga classes by the sea</li>
              <li>
                {" "}
                Driving through an unique narrow, dark tunnel which connects the
                south and north sides of the island
              </li>
              <li>Grape harvest // September</li>
            </ul>
          </Col>
        </WrapCol>
      </WrapText>
      <WrapPlaninaDown>
        {" "}
        <Image src={Down} alt="slider image" layout="fill" objectFit="cover" />
      </WrapPlaninaDown>
    </PlaninaWrap>
  );
};

export default Planina;
