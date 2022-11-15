import React from "react";
import MyMapComponent from "../Maps/Map";
const MapStep = ({ lat, lng, updateFields }) => {
  return (
    <div className="border border-red-500 flex items-center justify-center">
      <MyMapComponent lat={lat} lng={lng} />
    </div>
  );
};

export default MapStep;
