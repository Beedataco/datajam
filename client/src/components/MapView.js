import React, { useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 41],
    iconSize: [20,30],
});

L.Marker.prototype.options.icon = DefaultIcon;
// add marker popup
const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    } else {
        layer.bindPopup('No name');
    }
}

//fetch geojson from axios and render it on the map
const GetData = () => {
    const [data, setData] = React.useState();
    const map = useMap();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/v1/geojsonObrasPub',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    if (data) {
        // These next 3 lines purely for debuggins:
        const geojsonObject = L.geoJSON(data, {onEachFeature: onEachFeature});
        map.fitBounds(geojsonObject.getBounds());
        console.log(geojsonObject);
        // end debugging
        return <GeoJSON data={data} />
    } else {
        return null
    }
};


const MapView = (props) => {
  return (
    <MapContainer center={[4.570868, -74.297333]} zoom={10} scrollWheelZoom={false}>
        <GetData />
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  )
};

export default MapView;