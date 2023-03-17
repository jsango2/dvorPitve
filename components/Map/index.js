import React, { useRef, useEffect, useState } from "react";
import { Wrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibG92cmVwZXJhaWMiLCJhIjoiY2t5NDR3eXlsMDNqZjJwczE5bnBnbTVveSJ9.iNSjOEyPMGOmAWGeWOdPRA";

import { useInView } from "react-intersection-observer";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(16.718);
  const [lat, setLat] = useState(43.15);
  const [zoom, setZoom] = useState(11.7);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    // trigger inView function only once
    triggerOnce: false,
  });

  https: useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/lovreperaic/cl6ncvmw900b316pk6ubyr4su",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <Wrap>
      {/* <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container" />
    </Wrap>
  );
};

export default Map;
