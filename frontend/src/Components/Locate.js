import React, { Component, useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Navbar from './Navbar'


const Locate = () => {

  const getEmail = localStorage.getItem('email')

  const [userLocation, setUserLocation] = useState(null);

  const [bikes, setBikes] = useState([
    {
      id: 1,
      lat: 19.143105,
      lang: 77.307600,
    },
    {
      id: 2,
      lat: 19.141105,
      lang: 77.316600,
    }
  ])

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      }, error => {
        // handle error case
        console.error(error);
        setUserLocation({ lat: 19.143105, lng: 77.307600 });
      }
      );
    }

    else {
      setUserLocation({ lat: 19.143105, lng: 77.307600 });
    }

  }, []);

  console.log("email :", getEmail)

  const MapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={userLocation} // San Francisco
        apiKey='key'
      >
        {bikes.map((bike) => (
          <Marker
            key={bike.id}
            position={{ lat: bike.lat, lng: bike.lang }}
            onClick={() => this.props.handleMarkerClick(bike.id)}
          />
        ))}

        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/kml/shapes/man.png",
              scaledSize: new window.google.maps.Size(48, 48)
            }}
          />
        )}
      </GoogleMap>
    ))
  );

  return (
    <div>
      <Navbar email={getEmail} />
      <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=key`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100vh" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />

    </div>
  );
}

export default Locate;
