import React, from "react";
import{GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


const Map = ()=> {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };


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