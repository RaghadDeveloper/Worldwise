import React from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchPrams, setSearchPrams] = useSearchParams();
  const lat = searchPrams.get("lat");
  const lng = searchPrams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>
        position: {lat}, {lng}
      </p>
      <button onClick={() => setSearchPrams({ lat: 24, lng: 55 })}>
        change pos
      </button>
    </div>
  );
}

export default Map;
