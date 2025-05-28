import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';

const Mapa = () => {
  const [directions, setDirections] = useState(null);
  const [selected, setSelected] = useState(null);

  const uas = { lat: 23.2411, lng: -106.4309 };
  const machado = { lat: 23.2028, lng: -106.4211 };

  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: (uas.lat + machado.lat) / 2,
    lng: (uas.lng + machado.lng) / 2
  };

  const handleClick = (place) => {
    setSelected(place);
  };

  const handleDirectionsCallback = (result, status) => {
    if (status === 'OK') {
      setDirections(result);
    } else {
      console.error('Error obteniendo ruta:', status);
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        
        {/* Marcador UAS */}
        <Marker position={uas} onClick={() => handleClick({ name: 'UAS Mazatlán', ...uas })} />

        {/* Marcador Machado */}
        <Marker position={machado} onClick={() => handleClick({ name: 'Plazuela Machado', ...machado })} />

        {/* Ventana de información */}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>{selected.name}</h3>
            </div>
          </InfoWindow>
        )}

        {/* Solicita la ruta entre UAS y Machado */}
        {!directions && (
          <DirectionsService
            options={{
              origin: uas,
              destination: machado,
              travelMode: 'DRIVING'
            }}
            callback={handleDirectionsCallback}
          />
        )}

        {/* Muestra la ruta */}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
