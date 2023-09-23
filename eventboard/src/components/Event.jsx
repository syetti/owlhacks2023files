import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const Event = (props) => {
    return (
        <div className="Event">
            <p className="name">{props.name}</p>
            <p>{props.date}</p>
        </div>
    )

}
export default Event;