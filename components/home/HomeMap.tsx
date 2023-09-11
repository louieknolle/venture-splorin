import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ";

const HomeMap = () => {
  const [lng, setLng] = useState(-99.4805);
  const [lat, setLat] = useState(41.1983);
  const [zoom, setZoom] = useState(3.1);

  const mapContainer = useRef<any>(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
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
  <main>
    <div className="map-container shadow-xl" ref={mapContainer} />;
  </main>
  );
};

export default HomeMap;
