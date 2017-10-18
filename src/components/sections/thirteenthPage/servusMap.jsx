import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ServusMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXBmcJ6YKOzXFV87u3OgozJJfi6ij2T40&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `42vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 49.233562, lng: 28.441484 }}
    options={{gestureHandling: 'cooperative'}}
  >
    <Marker position={{ lat: 49.233562, lng: 28.441484 }} />
  </GoogleMap>
);

export default ServusMap