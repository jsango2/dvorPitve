import React, { useState } from "react";

import { HeroWrap, Container, Title } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Destination from "./Beach/Beach.js";

const PopulareBeaches = () => {
  return (
    <HeroWrap>
      <Title>Popular beaches</Title>
      <Container>
        <Destination
          photo=""
          title="Beach Jelsa
          4 km / 8 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />
        <Destination
          photo=""
          title="Beach Jelsa
          4 km / 8 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />{" "}
        <Destination
          photo=""
          title="Beach Jelsa
          4 km / 8 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />{" "}
        <Destination
          photo=""
          title="Beach Jelsa
          4 km / 8 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, senectus netus enim nibh urna ac sit habitasse."
        />
      </Container>
    </HeroWrap>
  );
};

export default PopulareBeaches;
