// src/components/Mapa.jsx
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const Mapa = () => {
  const [selected, setSelected] = useState(null);

  const center = {
    lat: 19.4326, // Latitud de Ciudad de México (por ejemplo)
    lng: -99.1332
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const handleMarkerClick = () => {
    setSelected({
      lat: center.lat,
      lng: center.lng,
      name: 'Ciudad de México'
    });
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker
          position={center}
          onClick={handleMarkerClick}
        />
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>{selected.name}</h3>
              <p>¡Hola desde el marcador!</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
