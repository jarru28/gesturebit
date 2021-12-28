import React, { useCallback,useContext } from "react";
import { withRouter } from "react-router";
import { Redirect} from "react-router-dom";
import {app} from "../firebase";
import { AuthContext } from "./Auth.js";
import '../styles/Login.css';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/bots");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/bots" />;
  }

  return (
    <div className="container-fluid vh-100" id='bodyLogin'>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-11 col-md-7 col-lg-5 col-xl-4 " id='cardLogin'>
          <h2 className="text-center mb-5" id="titleLogin">Sing up</h2>
          <form onSubmit={handleSignUp}>

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
            <button className="btn px-5 mt-3" id="buttonLogin" type="submit">Sing up</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);