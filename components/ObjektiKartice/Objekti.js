import { HeroWrap, WrapImageDivider, WrapObjects } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Objekt from "./Objekt/Objekt";
import h1 from "../../images/house1.png";
import h2 from "../../images/house2.png";
import h3 from "../../images/house3.png";
import photoBottom from "../../images/photoDivider.png";

const Objekti = () => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <HeroWrap>
      <WrapObjects>
        <Objekt
          id={1}
          photo={h1}
          title="VILLA A"
          text="Old stone house converted into a luxury villa offering everything you need for a vacation in a place where nature and luxury meet. The house consists of 3 floors, with the living room, kitchen, bedrooms, spacious terraces and the swimming pool"
          data1="Capacity of 8 people (6+2 in 200 m2)
3 floors"
          data2="Living room and kitchen 100m2"
          data3="3 bedrooms"
          data4="3 toilets"
          data5="2 spacious terraces (in front of the house and roof terrace)"
          data6="Backyard"
          data7="Swimming pool 21m2"
          data8="Air conditioning"
          onClick={() => console.log("klik")}
          handleClick={handleClick}
        />
        <Objekt
          id={2}
          photo={h2}
          title="VILLA B"
          text="A detached old stone house converted into a luxury villa offering everything you need for a luxurious relaxing vacation for a maximum of 6 people. The house consists of 3 floors with a living room, kitchen, data5, a spacious terrace and a swimming pool "
          data1="Capacity of 6 people (4+2 in 120 m2)
3 floors"
          data2="Living room + kitchen"
          data3="2 bedrooms"
          data4="2 toilets"
          data5="Spacious terrace"
          data6="Backyard"
          data7="Swimming pool 21m2"
          data8="Air conditioning"
          handleClick={handleClick}
        />{" "}
        <Objekt
          id={3}
          photo={h3}
          title="VILLA C"
          text="A detached old stone house converted into a luxury villa offering everything you need for a luxurious relaxing vacation for a maximum of 6 people. The house consists of 3 floors with a living room, kitchen, bedrooms, a spacious terrace and a swimming pool"
          data1="Capacity of 4 people (2+2 in 50 m2)
2 floors"
          data2="Living room + kitchen 30m2"
          data3="1 Bedroom"
          data4="1 toilet"
          bedrooms="Spacious terrace"
          data6="Spacious terrace"
          data7="Air conditioning"
          handleClick={handleClick}
        />
      </WrapObjects>
      <WrapImageDivider>
        {" "}
        <Image src={photoBottom} alt="house" layout="fill" objectFit="cover" />
      </WrapImageDivider>
    </HeroWrap>
  );
};

export default Objekti;
