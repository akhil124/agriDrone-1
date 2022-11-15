import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "500px",
};

const center = {
  lat: 0,
  lng: -180,
};

const position = {
  lat: 0,
  lng: -180,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYARwqk_ZEV99JlO9saOfbNNV7Bd3_EJE",
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);
  const handleOnPlaceChanged = (e) => {
    console.log(e, "Changed");
  };
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    console.log(map, "MAP");

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Autocomplete
        onLoad={(autocomplete) => handleOnPlaceChanged(autocomplete)}
        // onUnmount={(autocomplete) => handleOnPlaceChanged(autocomplete)}
        // onPlaceChanged={(autocomplete) => handleOnPlaceChanged(autocomplete)}

        // onPlaceChanged={}
      >
        <input
          className="p-4 border-black border"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px",
          }}
        />
      </Autocomplete>
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
