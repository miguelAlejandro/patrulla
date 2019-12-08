import React from 'react';
import GoogleMapReact from 'google-map-react';
import "./css/sensor.css";

const Sensor = ({ text }) => < div className="sensor" > {text} < /div>;
const Patrulla = ({text}) => < div className="patrulla" > {text} < /div>;
    
function SimpleMap(props) {


    const defaultProps = {
            center: {
            lat: 19.4399935,
        lng: -70.7430644
    },
    zoom: 12
};

    const handleApiLoaded = (map, maps) => {
            // use map and maps objects
        };
        return (
            // Important! Always set the container height explicitly
    
        <div style={
                { height: '95vh', padding: '20px' }} >
            <GoogleMapReact bootstrapURLKeys={
                    { key: "AIzaSyDOwoAFQVTjgqYs1r5f7j_6Y4yr5er2-v8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={
                    ({ map, maps }) => handleApiLoaded(map, maps)} >

                <Sensor lat={19.4399935}
                    lng={-70.7430644}
                    text="Sensor 1" /
                >
                <Sensor lat={19.4299935}
                    lng={-70.2430644}
                    text="Sensor 2" /
                >
                <Sensor lat={19.1399935}
                    lng={-70.1430644}
                    text="Sensor 3" /
                >
                <Sensor lat={19.4399935}
                    lng={-70.9430644}
                    text="Sensor 4" /
                >
                <Sensor lat={19.5399935}
                    lng={-70.3430644}
                    text="Sensor 5" /
                >
                <Patrulla lat={19.1299935}
                    lng={-70.6430644}
                    text="patrulla 1" /
                >
                <Patrulla lat={19.6399935}
                    lng={-70.3430644}
                    text="patrulla 2" /
                >
                <Patrulla lat={19.3399935}
                    lng={-70.6430644}
                    text="patrulla 3" /
                >
                <Patrulla lat={19.2399935}
                    lng={-70.5430644}
                    text="patrulla 4" /
                >
                <Patrulla lat={19.6399935}
                    lng={-70.7430644}
                    text="patrulla 5" /
                >
                <Patrulla lat={19.5399935}
                    lng={-70.1430644}
                    text="patrulla 6" /
                >
                </GoogleMapReact> </div>
        
        
            );
        
        }
export default SimpleMap;