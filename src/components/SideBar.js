import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/sideBar.css'
import {app} from '../firebase.js'
import '../styles/navigation.css'
import { AuthContext } from "./Auth.js";

export default function SideBar(){
    const { currentUser } = useContext(AuthContext);
        return (
                    <aside className="col-12 col-md-2 flex-shrink-1" id="sideBar">
                        <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column 
                        flex-row align-items-center py-2 text-center sticky-top">
                            <div className="text-center p-3">
                                
                                <div className="navbar-brand mx-0 text-nowrap">{currentUser.email}</div>
                            </div>  
                            <button className="navbar-toggler border-0 order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>  
                            <div className="collapse navbar-collapse prder-last" id="navbarTogglerDemo02">
                                <ul className="navbar-nav flex-column w-100 justify-content-center fs-5 ">
                                    <li className="nav-item py-1">
                                        <Link className="nav-link " to="/bots"><i className="bi bi-house"></i> Home </Link>
                                    </li>
                                    <li className="nav-item py-2">
                                        <Link className="nav-link" to="/createBot"><i className="bi bi-plus-circle-dotted"></i> Create Bot</Link>
                                    </li>
                                    <li className="nav-item py-2">
                                        <Link className="nav-link" to="/strategies"><i className="bi bi-lightbulb"></i> Strategies</Link>
                                    </li>
                                    <li className="nav-item py-2">
                                        <Link className="nav-link" to="/createExchange"><i className="bi bi-person-circle"></i> Exchange</Link>
                                    </li>
                                    <li className="nav-item py-3">
                                    <button className="btn" id='buttonOut' onClick={() => app.auth().signOut()}>Sign out</button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </aside> 
        )
    }
