import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav class="navbar">
        <div class="navbar-brand">
            
            <h1 class="title" >Bassist Game</h1>
            
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarRightSide">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarRightSide" class="navbar-menu">
            <div class="navbar-end">
                <p class="navbar-item menuItem" >Score: {props.score}</p>
                <p class="navbar-item menuItem" >Top Score: {props.topScore}</p>
                
            </div>
        </div>
    </nav>
    ); 
}

export default Navbar;