import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import '../styles/topbar.css';

function TopBar(){
    return(
        <div className="top-bar">
            <div className="top-bar-right">
                <button className="contact-button">Contact Us</button>
                <div className="cart-icon">🛒</div>
                <div className="profile-circle">P</div>
            </div>
            <div className="top-bar">
                <div className="header-container">
                    <Header />
                </div>
                <div className="nav-container">
                    <NavBar />
                </div>
            </div>
        </div>

    );
    
}

export default TopBar