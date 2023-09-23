import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const Event = (props) => {
    return (
        <div className="Event">
            <Link to={`/event/${props.id}`}>
            <p className="name">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <p>{props.location}</p>
            <p>{props.image}</p>

            </Link>
        </div>
    )

}
export default Event;