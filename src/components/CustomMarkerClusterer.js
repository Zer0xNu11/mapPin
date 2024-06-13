
import React from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";

export default function CustomMarkerClusterer() {
  const places = [
    { info: "info1", location: { lat: 43.048225, lng: 141.49701 } },
    { info: "info2", location: { lat: 44.048225, lng: 142.49701 } },
  ];

  const clusterStyles = [
    {
      textColor: "white",
      url: "logo512.png",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url: "logo512.png",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url: "logo512.png",
      height: 50,
      width: 50,
    },
  ];
  // クラスターサイズに応じてカスタムアイコンで表示することができます。

  const options = {
    gridSize: 50,
    styles: clusterStyles,
    maxZoom: 15,
  };

  return (
    <MarkerClusterer options={options}>
      {(clusterer) =>
        places.map(
          (marker) =>
            (
              <Marker
                key={`${marker.location.lat * marker.location.lng}`}
                clusterer={clusterer}
                position={{
                  lat: marker.location.lat,
                  lng: marker.location.lng,
                }}
                icon={{
                  url: "pin1.svg",
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            )
        )
      }
    </MarkerClusterer>
  );
}


