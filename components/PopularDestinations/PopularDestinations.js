import React, { useState } from "react";

import { HeroWrap, Container, Title } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Destination from "./Destination/Destination.js";

const PopularDestinations = () => {
  return (
    <HeroWrap>
      <Title>Popular destinations on the island</Title>
      <Container>
        <Destination
          photo=""
          title="Hvar - 22 min by car"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />
        <Destination
          photo=""
          title="Hvar - 23 min by car"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />{" "}
        <Destination
          photo=""
          title="Hvar - 24 min by car"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />{" "}
        <Destination
          photo=""
          title="Hvar - 25 min by car"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />
      </Container>
    </HeroWrap>
  );
};

export default PopularDestinations;
