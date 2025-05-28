// src/components/MapaConClusters.jsx
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  MarkerClustererF
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 23.2494, // Mazatlán
  lng: -106.4111
};

// Genera 100 marcadores alrededor del centro
const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + Math.random() * 0.1 - 0.05,
      lng: center.lng + Math.random() * 0.1 - 0.05
    });
  }
  return markers;
};

const MapaConClusters = () => {
  const markers = generateMarkers();

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <MarkerClustererF>
          {(clusterer) =>
            markers.map((pos, index) => (
              <MarkerF key={index} position={pos} clusterer={clusterer} />
            ))
          }
        </MarkerClustererF>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapaConClusters;
