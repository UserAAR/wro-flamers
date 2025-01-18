import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import leaflet to avoid SSR issues
const FireMap = ({ fireData }) => {
  const [L, setL] = useState(null);

  useEffect(() => {
    const leaflet = require('leaflet');
    setL(leaflet);
  }, []);

  if (!L) {
    return <div>Loading map...</div>;
  }

  const test = [37.5, -120.04];
  return (
    <MapContainer center={test} zoom={6} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {fireData.map((fire, index) => (
        <Circle
          key={index}
          center={[fire.lat, fire.long]}
          radius={fire.gis_acres * 10} // Adjust the radius for visibility
          color="red"
          fillOpacity={0.5}
        >
          <Popup>
            <b>Fire Name:</b> {fire.fire_name}
            <br />
            <b>Fire Cause:</b> {fire.cause}
            <br />
            <b>Acres Burned:</b> {fire.gis_acres.toFixed(2)}
            <br />
            <b>Date of Fire:</b> {fire.date}
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default FireMap;
