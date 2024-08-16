import React from 'react'
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom";
import header from "../styles/header.css"
function Header() {
    return (
        <div className='hd'>
        <div className="logo">
        <Link to="/">
           <img src={logo} alt = "logo"/>
        </Link>
        </div>
        <header>
            <h1>The Poultry Project</h1>
        </header>
        </div>
        
    );
}

export default Header;