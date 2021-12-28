import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigation.css'
import logo from '../images/GESTUREBIT.png'
import { AuthContext } from "./Auth.js";
    

export default function Navigation() {
    const { currentUser } = useContext(AuthContext);

        return (<div>
            {  !currentUser &&
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
                            <Link className="navbar-brand mx-4 px-5" to="/login" id='butLogin'>Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="navbar-brand px-5" to="/singup" id="butSingup">Sing Up</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            }  
            </div> 
        )
    }

