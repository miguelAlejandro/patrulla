import React from 'react';
import useAxios from 'axios-hooks';
import GoogleMapReact from 'google-map-react';
import "./css/sensor.css";
import "./css/patrulla.css";

function Sensor({ text }) {

    return (<div className="sensor">{text}</div>
    );
}

function Patrulla({ text }) {
    return (<div className="patrulla">{text}</div>);
}

function SimpleMap(props) {
    const [{ data: getSensores, loading: getSensoresLoading, error: getSensoresError }] = useAxios(
        'http://localhost:3000/api/read_sensores'
    )
    const [{ data: getPatrullas, loading: getPatrullasLoading, error: getPatrullasError }] = useAxios(
        'http://localhost:3000/api/read_patrullas'
    )
    if (getSensoresLoading || getPatrullasLoading) return <p>Loading...</p>
    if (getSensoresError || getPatrullasError) return <p>Error!</p>

    const defaultProps = {
        center: {
            lat: 19.4399935,
            lng: -70.7430644
        },
        zoom: 12
    };

    console.log(getSensores)
    console.log(getPatrullas)

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    return (
        // Important! Always set the container height explicitly

        <div style={{ height: '95vh', padding: '20px' }} >

            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDOwoAFQVTjgqYs1r5f7j_6Y4yr5er2-v8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} >

                {getSensores.sensores.map((d) =>  <Sensor lat={parseFloat(d.ejeX)}
                    lng={parseFloat(d.ejeY)}
                    text={d.nombre} /
                >)}
               {getPatrullas.patrullas.map((p) =>  <Patrulla lat={parseFloat(p.ejeX)}
                    lng={parseFloat(p.ejeY)}
                    text={p.nombre} /
                >)}


            </GoogleMapReact>
        </div>


    );

}
export default SimpleMap;