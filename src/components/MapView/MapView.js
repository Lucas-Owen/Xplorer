import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useCallback } from "react";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY;

function CustomMap (props) {
  const map = useMap();
  const logCenter = useCallback((event) => {
    console.log(map.getBounds());
  });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map defaultZoom={1} defaultCenter={{ lat: 0, lng: 0 }} onClick={logCenter}></Map>
    </div>
  );
}

export default function MapView (props) {

  return (
    <APIProvider apiKey={API_KEY}>
      {/* <CustomMap {...props} /> */}
    </APIProvider>
  );
}


