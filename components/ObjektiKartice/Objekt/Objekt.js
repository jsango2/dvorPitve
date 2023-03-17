import {
  WrapObjekt,
  Title,
  Text,
  WrapImage,
  Line,
  WrapButton,
  ButtonBack,
  WrapGalleryLink,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Button from "../../Button/index.js";
import Camera from "../../../images/about/camera.svg";

const Objekt = ({
  photo,
  title,
  text,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  id,
  handleClick,
}) => {
  const handleClicked = (id) => {
    handleClick(id);
  };
  return (
    <WrapObjekt onClick={() => handleClicked(id)}>
      <WrapImage>
        {" "}
        <Image src={photo} alt="house" layout="fill" objectFit="cover" />
        <WrapGalleryLink>
          {" "}
          <Image
            src={Camera}
            alt="house"
            layout="fixed"
            width={20}
            height={20}
          />
          <div style={{ marginLeft: "10px" }}>VILLA GALLERY</div>
        </WrapGalleryLink>
      </WrapImage>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <WrapButton>
        <Button text="BOOK NOW" version="dark" />
      </WrapButton>
      <Line />
      <ul>
        <li>{data1}</li>
        <li>{data2}</li>
        <li>{data3}</li>
        <li>{data4}</li>
        <li>{data5}</li>
        <li>{data6}</li>
        {data7 && <li>{data7}</li>}
        {data8 && <li>{data8}</li>}
      </ul>
    </WrapObjekt>
  );
};

export default Objekt;
