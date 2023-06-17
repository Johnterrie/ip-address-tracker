import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "./map.css";

const Map = () => {
  const mapContainer = useRef();
  useEffect(() => {
    var map = L.map("map").setView([100.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .openPopup();

    // unmount map function
    return () => map.remove();
  }, []);

  return (
    <div className="map-div" id="map" ref={(el) => (mapContainer.current = el)}>
    </div>
  );
};

export default Map;
