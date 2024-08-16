import React from "react";
import {Link} from 'react-router-dom'
import '../styles/navbar.css';


function NavBar(){
    return(
        <div className="nav" id="navbar2">
            <nav className="navbar"> 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>  
                    </li>
                    <li>
                        <Link to="/branches">Branches</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;