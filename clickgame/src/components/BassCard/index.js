import React from "react";
import "./style.css";

function BassCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <div className="content">
                <ul>
                    <li>Name: {props.name}</li>
                    <li>Band: {props.band}</li>
                    <li>Location: {props.location}</li>
                </ul>
            </div>
            <span onClick={() => props.removeBass(props.id)} className="remove">
                x
            </span>
        </div>
    );
}

export default BassCard;