import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";

import {app} from "../firebase.js";
import { AuthContext } from "./Auth.js";
import '../styles/Login.css';

const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/bots");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  

  if (currentUser) {
    return <Redirect to="/bots" />;
  }

  return (
    <div className="container-fluid vh-100" id='bodyLogin'>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-11 col-md-7 col-lg-5 col-xl-4 " id='cardLogin'>
          <h2 className="text-center mb-5" id="titleLogin">Login</h2>
          <form onSubmit={handleLogin}>

            <div className="form-outline form-white mb-4 ">
              <label className="form-label " id="labelLogin">
              <i class="bi bi-envelope-fill"></i> Email
                </label>
                <input name="email" className="form-control "  type="email" id="input" placeholder="Write your email"/>
              
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" id="labelLogin">
              <i class="bi bi-lock-fill"></i> Password
              </label>
                <input name="password" className="form-control " type="password" id="input" placeholder="Write your password"/>
              
            </div>
            <div className="text-center">
            <button className="btn px-5 mt-3" id="buttonLogin" type="submit">Log in</button>
            </div>
          </form>
          <hr></hr>
          <div className="text-center">Don't you have an account?<Link className="" to="/singup"> SingUp </Link></div>
          
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);