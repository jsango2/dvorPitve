import { Wrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Up from "../../images/Planine/planinaBgGori.png";
import Down from "../../images/Planine/planinaBgDoli.png";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const VideoAerial = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    // trigger inView function only once
    triggerOnce: false,
  });
  return (
    <Wrap>
      <ReactPlayer
        url="/desktop.mov"
        controls="true"
        width="100%"
        height="100%"
      />
    </Wrap>
  );
};

export default VideoAerial;
