"use client"
import React from "react";
import Map, { GeolocateControl, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import classes from '../../styles/Home-Map.module.css';


const HomeMap = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
  return (
    <Map
          mapboxAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          style={classes.mapStyle}
          initialViewState={{ latitude: 35.668641, longitude: 139.750567, zoom: 10 }}
          maxZoom={20}
          minZoom={3}
        >
          <GeolocateControl position="top-left" />
				  <NavigationControl position="top-left" />
        </Map>
  );
};

export default HomeMap;



