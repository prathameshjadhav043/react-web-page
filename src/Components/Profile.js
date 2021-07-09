import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export const Profile = ({ handleLogout }) => {
    return (
        <>
            <div className="container">
                <nav className="nav flex">
                    <ul className="ul flex">
                        <li><Link className="li" to="/Home">Home</Link></li>
                        <li><Link className="li" to="/About" >About</Link></li>
                        <li>More</li>
                        <div className="search-bar flex">
                            <input className="input in" type="text" />
                            <button className="btn search">Search</button>
                        </div>
                    </ul>
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                </nav>
            </div>
        </>
    )
}

