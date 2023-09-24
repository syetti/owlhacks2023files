import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { BookmarkStar, BookmarkStarFill } from 'react-bootstrap-icons';
import { useState } from "react";

const Event = (props) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick  = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="Event">
            <p className="name">{props.name}</p>

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