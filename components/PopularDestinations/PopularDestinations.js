import React, { useState } from "react";

import {
  HeroWrap,
  Container,
  Title,
  WrapBg,
  DistancesLocationsWrap,
  WrapList,
  Left,
  WrapImageDivider,
  Right,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Destination from "./Destination/Destination.js";
import { destinationsList } from "./list.js";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Bg from "../../images/ourHome/paper.svg";
import photoBottom from "../../images/photoDivider.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderNext" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderPrev" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowBack size={25} />
      </div>
    </div>
  );
}

const PopularDestinations = () => {
  const settings = {
    // className: "photoSlider",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <HeroWrap>
      <WrapBg>
        <Image src={Bg} alt="background" layout="fill" objectFit="cover" />
      </WrapBg>
      <DistancesLocationsWrap>
        <Title>Distances & Locations</Title>
        <WrapList>
          <Left>
            <ul>
              <li>Nearest beach - 3 km</li>
              <li>Nearest supermarket - 1,8 km</li>
              <li> Nearest ferry - 13 km (Stari Grad)</li>
              <li>Nearest restaurant - 50 m (Dvor Duboković)</li>
              <li>Nearest bar - 2,5 km (Jelsa)</li>
            </ul>
          </Left>
          <Right>
            <ul>
              <li>Nearest town - 2 km</li>
              <li>Nearest pharmacy - 2,5 km</li>
              <li>Nearest hospital - 3 km</li>
              <li> Nearest cinema - 2,3km</li>
            </ul>
          </Right>
        </WrapList>
      </DistancesLocationsWrap>
      <Title>Popular destinations on the island</Title>
      <Container>
        <Slider {...settings}>
          {destinationsList.map((dest) => (
            <Destination
              key={dest.title}
              photo={dest.photo}
              title={dest.title}
              link={dest.link}
              text={dest.text}
            />
          ))}
        </Slider>
      </Container>
      <WrapImageDivider>
        {" "}
        <Image src={photoBottom} alt="house" layout="fill" objectFit="cover" />
      </WrapImageDivider>
    </HeroWrap>
  );
};

export default PopularDestinations;
