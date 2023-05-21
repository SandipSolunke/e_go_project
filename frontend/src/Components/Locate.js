import React, { Component, useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Navbar from './Navbar'
import axios from 'axios';
import bikeLocationApi from './Api/BikeLocationApi.js'


const Locate = () => {

  const getEmail = localStorage.getItem('email')

  const [userLocation, setUserLocation] = useState(null);

  const [bikes, setBikes] = useState([])


  const fetchLocationData = async () => {
    const getBikeLocationsRes = bikeLocationApi.get('/get_bike_locations')
    console.log((await getBikeLocationsRes).data.data)
    setBikes((await getBikeLocationsRes).data.data)
  };

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // setUserLocation({ lat: latitude, lng: longitude });
        setUserLocation({ lat: 19.143105, lng: 77.307600 });

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

  useEffect(async () => {
    await fetchLocationData();
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA224qzakCDtSHK4AwGLw6aKFp5yH-HYwo`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100vh" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />

    </div>
  );
}

export default Locate;
