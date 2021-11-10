import React, { useEffect, useRef, useState } from "react";

const GMap = () => {
  const [setLat, setsetLat] = useState(23.052841886125744); //
  const [setLong, setsetLong] = useState(72.53324643751156); //
  const googleMapRef = useRef(null);
  let googleMap = null;

  function getLocation() {
    if (navigator.geolocation) {
      const geoData = navigator.geolocation.getCurrentPosition(showPosition);
      console.log(geoData);
    }
  }

  function showPosition(position) {
    setsetLat(position.coords.latitude);
    setsetLong(position.coords.longitude);
    console.log(
      "Latitude: " +
        position.coords.latitude +
        " Longitude: " +
        position.coords.longitude
    );
  }

  useEffect(() => {
    getLocation();
    UpdateLocation();
    // setTimeout(() => {
    googleMap = initGoogleMap();
    createMarker();
    // }, 2000);
  }, [getLocation]);

  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: setLat, lng: setLong },
      zoom: 16,
    });
  };

  const UpdateLocation = () => {
    createMarker();
  };
  // create marker on google map
  const createMarker = () => {
    new window.google.maps.Marker({
      position: { lat: setLat, lng: setLong },
      map: googleMap,
    });
  };

  return (
    <>
      <div ref={googleMapRef} style={{ width: 1200, height: 500 }} />
      <div>
        <p>
          Lat:{setLat}, Long:{setLong}
        </p>
      </div>
    </>
  );
};

export default GMap;
