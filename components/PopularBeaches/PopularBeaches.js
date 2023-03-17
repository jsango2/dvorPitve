import React, { useState } from "react";

import { HeroWrap, Container, Title, WrapArrow } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Destination from "./Beach/Beach.js";
import { beachesList } from "./list.js";
import { VscArrowRight } from "react-icons/vsc";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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

const PopulareBeaches = () => {
  const settings = {
    // className: "photoSlider",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <HeroWrap>
      <Title>Popular beaches</Title>
      {/* <WrapArrow>
        <VscArrowRight style={{ color: "#303145", fontSize: "30px" }} />
      </WrapArrow> */}
      <Container>
        <Slider {...settings}>
          {beachesList.map((lovre) => (
            <Destination
              key={lovre.title}
              photo={lovre.photo}
              title={lovre.title}
              text={lovre.text}
            />
          ))}
        </Slider>
      </Container>
    </HeroWrap>
  );
};

export default PopulareBeaches;
