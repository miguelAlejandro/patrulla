import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    
      <div style={{ height: '95vh', padding: '20px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOwoAFQVTjgqYs1r5f7j_6Y4yr5er2-v8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >

        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    
    
  );

}
export default SimpleMap;