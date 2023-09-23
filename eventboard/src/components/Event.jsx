import React from "react";


const Event = (props) => {
    return (
        <div className="Event">
            <p className="name">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )

}
export default Event;