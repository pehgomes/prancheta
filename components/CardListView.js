import React from "react";
import './CardListView.css'

export default (props) => {
    return (
        <div className="CardListView">
            <h4>{props.title}</h4>
            <p>{props.children}</p>
        </div>
    );
}

