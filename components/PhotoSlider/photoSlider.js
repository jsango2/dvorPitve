import { HeroWrap, WrapPhoto, WrapPhoto2 } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";

import { useInView } from "react-intersection-observer";
import useWindowSize from "../useWindowSize.js";
import Slider from "react-slick";
import Image from "next/image";
import { images } from "./images.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderNext">
      <div className="arrow">
        <AiOutlineArrowRight size={25} />
      </div>
      <div className="loaderPrev" onClick={onClick}></div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderPrev">
      <div className="arrow">
        <AiOutlineArrowLeft size={25} />
      </div>
      <div className="loaderNext" onClick={onClick}></div>
    </div>
  );
}

const PhotoSlider = () => {
  const settings = {
    className: "photoSlider",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const size = useWindowSize();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <HeroWrap id="images" ref={ref}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <WrapPhoto key={index}>
            <Image
              src={img.photo}
              alt="slider image"
              layout="fill"
              objectFit="contain"
            />
          </WrapPhoto>
        ))}
      </Slider>
    </HeroWrap>
  );
};

export default PhotoSlider;
