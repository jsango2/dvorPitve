import React, { useState } from "react";

import { HeroWrap, WrapImage, Title, Text, Line } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Destination = ({ photo, title, text }) => {
  return (
    <HeroWrap>
      <WrapImage></WrapImage>
      <Line />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </HeroWrap>
  );
};

export default Destination;
