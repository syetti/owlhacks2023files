import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { BookmarkStar, BookmarkStarFill } from 'react-bootstrap-icons';
import { useState } from "react";
import{GoogleMap, useLoadScript, Marker, LoadScript} from '@react-google-maps/api';

const Event = (props) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick  = () => {
        setIsFavorited(!isFavorited);
    };
    const containerStyle = {
        width: '100%',
        height: '200px'
    };
    
    return (
        <div className="Event">
            <p className="name">{props.name}</p>
            <p className='address'>{props.address} {props.city}, {props.country}</p>
            <div className="map-container">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_MAPS_APP_API_KEY}>
                    <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center = {{lat: props.latitude, lng: props.longitude}}
                    zoom = {13}
                    
                    >
                        <Marker
                        position={{ lat: props.latitude, lng: props.longitude }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
            
            <div className="favorite">
                {isFavorited ? (
                <BookmarkStarFill size={30} onClick={handleFavoriteClick} className="filled" />
                ) : (
                <BookmarkStar size={30} onClick={handleFavoriteClick} />
                )}
            </div>
        </div>
    )

}
export default Event;