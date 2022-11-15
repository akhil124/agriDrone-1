import React from "react";
import MyMapComponent from "../Maps/Map";
const MapStep = () => {
  return (
    <div className="border border-red-500 flex items-center justify-center">
      <MyMapComponent isMarkerShown />
    </div>
  );
};

export default MapStep;
