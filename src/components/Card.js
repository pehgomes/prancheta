import React from "react";
import './Card.css'

export default (props) => {
    
    return (
        <div className="Card">
            <h4>{props.title}</h4>
            <p>{props.children}</p>
        </div>
    );
}
