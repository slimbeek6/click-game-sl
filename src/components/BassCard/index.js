import React from "react";
import "./style.css";

function BassCard(props) {
    return (
        <div className="card">
            <div className="img-container" data-id={props.id} aria-label="click item" onClick={(event) => props.clickBass(event)}>
                <img alt={props.name} src={props.image} id={props.id}/>
            </div>
        </div>
    );
}

export default BassCard;