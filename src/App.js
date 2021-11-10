import React, { useState, useEffect } from "react";
import GMap from "./GMap";


// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5OTnO2NCdRW-XrThGNESysYSC4pww8rM`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

const App = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      {!loadMap ? <div>Loading...</div> : <GMap />}
      <br />
      <br />
      <small>
        <b>Note:</b> In order to make it work, you have to set the
        YOUR_GOOGLE_MAP_API_KEY in App.js file.{" "}
      </small>
    </div>
  );
};

export default App;
