import React from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const MapStep = () => {
  return (
    <>
      <h2 className="text-3xl text-[color:var(--primary)] font-semibold mb-4">
        Location
      </h2>
      <div className="flex justify-center">
        <div className="h-[500px] w-[700px] relative">
          <p className="z-99 absolute top-[200px] left-[130px] ">
            <LocationOnIcon className="text-red-500" />
          </p>
          <img
            className="z-1"
            layout="fill"
            src="/assets/map.png"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </>
  );
};

export default MapStep;
