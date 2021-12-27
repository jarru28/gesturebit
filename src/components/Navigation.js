import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigation.css'
import logo from '../images/GESTUREBIT.png'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo}  alt="logo" width="120" height="120" id="gesturebit"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/bots"></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/createBot"></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/strategies"></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/createExchange"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>    
        )
    }
}
