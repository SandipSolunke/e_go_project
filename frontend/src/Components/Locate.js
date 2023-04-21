import React, { Component, useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Navbar from './Navbar'
import dotenv from 'dotenv';
dotenv.config();


const Locate = () => {

  const getEmail=localStorage.getItem('email')


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

  console.log("email :",getEmail)

  const MapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 19.142089, lng: 77.319503 }} // San Francisco
        apiKey={process.env.GOOGLE_API_KEY}
      >
        {bikes.map((bike) => (
          <Marker
            key={bike.id}
            position={{ lat: bike.lat, lng: bike.lang }}
            onClick={() => this.props.handleMarkerClick(bike.id)}
          />
        ))}
      </GoogleMap>
    ))
  );

  return (
    <div>
      <Navbar email={getEmail}/>
      <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100vh" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />

    </div>
  );
}

export default Locate;
