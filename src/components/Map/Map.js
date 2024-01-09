import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[52.402513709358125, 16.929160746833585]} zoom={18}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[52.402513709358125, 16.929160746833585]}>
        <Popup>Sasha lives here, come over for a cup of coffee :)</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">TechnoTiger</h3>
        <span>Country: Poland</span>
        <br />
        <span>Location : Polwiejska 26</span>
        <br />
        <span>Email: oleksandr.malishevskiy@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
