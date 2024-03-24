import { APIProvider, InfoWindow, Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState, useCallback } from "react";
import * as PropTypes from "prop-types";
import { Tween, Easing, update } from "@tweenjs/tween.js";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY;


const INITIAL_CAMERA = {
  center: { lat: 0, lng: 0 },
  zoom: 1
};


export function CustomMap (props) {
  const map = useMap();
  const { position, title } = props;
  const [cameraProps, setCameraProps] = useState(INITIAL_CAMERA);
  const handleCameraChange = useCallback((ev) =>
    setCameraProps(ev.detail)
    , []);

  useEffect(() => {
    if (!map) return;
    map.addListener("click", (mapsMouseEvent) => {
      console.log(mapsMouseEvent.latLng.toJSON());
    });
  }, [map]);

  useEffect(() => {
    if (position) {
      const center = map.getCenter();
      const finalPosition = { center: position, zoom: 7 };
      const cameraOptions = { center: { lat: center.lat(), lng: center.lng() }, zoom: map.getZoom() };

      new Tween(cameraOptions)
        .to(finalPosition, 3000)
        .easing(Easing.Quadratic.Out)
        .onUpdate(() => {
          map.moveCamera(cameraOptions);
        })
        .start();
      function animate (time) {
        requestAnimationFrame(animate);
        update(time);
      }
      requestAnimationFrame(animate);
    }
  }, [map, position]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map defaultCenter={INITIAL_CAMERA.center} defaultZoom={INITIAL_CAMERA.zoom}>
        {
          position &&
          <>
            {/* <InfoWindow position={position}>{title}</InfoWindow> */}
            <Marker position={position} />
          </>
        }
      </Map>
    </div>
  );
}

export default function MapView (props) {

  return (
    <APIProvider apiKey={API_KEY}>
      <CustomMap {...props} />
    </APIProvider>
  );
}

MapView.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  title: PropTypes.string
};
