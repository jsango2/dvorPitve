import { Wrap } from "./style.js";
import Image from "next/image";
import Up from "../../images/Planine/planinaBgGori.png";
import Down from "../../images/Planine/planinaBgDoli.png";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const VideoAerial = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <Wrap ref={ref}>
      {inView && (
        <ReactPlayer
          url="/desktop.mov"
          controls="true"
          width="100%"
          height="100%"
        />
      )}
    </Wrap>
  );
};

export default VideoAerial;
