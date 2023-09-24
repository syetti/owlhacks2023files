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
            <a href={`https://www.google.com/maps/search/?api=1&query=${props.name.replace(/ /g, '+')},${props.address.replace(/ /g, '+')},${props.city.replace(/ /g, '+')},${props.country.replace(/ /g, '+')}`} className='address' target='_blank'>{props.address} {props.city}, {props.country}, {props.name}</a>
            <p className="cords"></p>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_MAPS_APP_API_KEY}>
                
                <GoogleMap 
                mapContainerStyle={containerStyle}
                center = {{lat: props.latitude, lng: props.longitude}}
                zoom = {14}
                >
                    <Marker
                    position={{lat: props.latitude, lng: props.longitude}}
                    label="Googleplex"
                    />
                </GoogleMap>
            </LoadScript>
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