import Navbar from "./Navbar"
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import bikeApi from "./Api/BikeApi";

const UnlockBike = () => {
    const [bikeId, setBikeId] = useState(null);
    const [distance, setDistance] = useState(0);
    const [isScanning, setIsScanning] = useState(false);

    const handleScan = async (data) => {
        console.log("scanned qr")
        if (data) {
            console.log("data :",data)
            setIsScanning(false);
            try {
                const response = bikeApi.post(`/unlock_bike?id=${data.text}`, { data });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleStartScan = () => {
        setIsScanning(true);
    };

    const handleStopScan = () => {
        setIsScanning(false);
    };

    return (
        <div>
            <Navbar />
            <div className="products-container" style={{ backgroundColor: "rgb(162, 221, 201)" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>Unlock Bike</h1>
                    {isScanning ? (
                        <div style={{ width: '300px', height: '300px' }}>
                            <QrReader delay={300} onError={handleError} onResult={handleScan} onScan={handleScan} facingMode="environment"  resolution={1200} style={{ width: '100%' }} />
                            <button onClick={handleStopScan} style={{ marginTop: '10px' }}>Stop Scan</button>
                        </div>
                    ) : (
                        <>
                            <button onClick={handleStartScan} style={{ marginBottom: '20px' }}>Scan QR code to unlock bike</button>
                            <p style={{ fontSize: '20px', marginBottom: '20px' }}>Distance traveled: {distance} km</p>
                            <button disabled={!bikeId} style={{ marginBottom: '20px', backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '18px' }}>Lock Bike</button>
                            <button onClick={() => setDistance(distance + 1)} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '18px' }}>Add 1 km to distance</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UnlockBike