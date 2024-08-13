import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import '../styles/topbar.css';

function TopBar(){
    return(
        <div>
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