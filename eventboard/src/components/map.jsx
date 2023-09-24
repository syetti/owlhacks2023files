import React, { useState, useEffect } from "react";
import{GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


const Map = ()=> {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    const {isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.MAPS_APP_API_KEY,
    })
    if (!isLoaded) return <div>Loading...</div>


    const [center, setCenter] = useState({ lat: 0, lng: 0});

    useEffect(() =>{ 
        fetch('https://www.refugerestrooms.org/api/v1/restrooms/by_location')
            .then((response) => response.json())
            .then((data) => {
                if (data.latitude && data.longitude){
                    setCenter({lat: data.latitude, lng: data.longitude});
                }
            })
            .catch((error) =>{
                console.error('Error fetching data: ', error)
            })
    }, []) 

    return(
        <LoadScript googleMapsApiKey= {process.env.MAPS_APP_API_KEY}>
            <GoogleMap 
            mapContainerStyle={containerStyle} // put in container for map
            center={center}
            zoom={10} //default zoom
            >

            </GoogleMap>
        </LoadScript>
    )
}

export default Map;