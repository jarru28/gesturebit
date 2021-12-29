import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

import {app} from "../firebase.js";
import { AuthContext } from "./Auth.js";
import '../styles/Login.css';
let validate=true;
const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const handleLogin = useCallback(
    async data => {
      
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        history.push("/bots");
        Swal.fire({
          title:'Login Succesfully!',
          icon:'success',
          showConfirmButton: false,
          timer: 1000,
          position:'top'
      });
      } catch (error) {
        validate=false;
      }
    },
    [history]
  );
  let InEmail='';
  let InPass=''
  if(errors.email)InEmail='inputLogErr'; else InEmail='inputLog';
  if(errors.password)InPass='inputLogErr'; else InPass='inputLog';

  if (currentUser) {
    return <Redirect to="/bots" />;
  }

  return (
    <div className="container-fluid vh-100" id='bodyLogin'>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-11 col-md-7 col-lg-5 col-xl-4 " id='cardLogin'>
          <h2 className="text-center mb-5" id="titleLogin">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>

            <div className="form-outline form-white mb-4 ">
              <label className="form-label " id="labelLogin">
              <i className="bi bi-envelope-fill"></i> Email
                </label>
                <input name="email" className="form-control " id={InEmail} placeholder="Write your email"
                {...register('email',{
                  required:{
                    value:true,
                    message:'Field is empty'
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Format is not correct"
                  }
                })} />
                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
              
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" id="labelLogin">
              <i className="bi bi-lock-fill"></i> Password
              </label>
                <input name="password" className="form-control " type="password" id={InPass} placeholder="Write your password"
                {...register('password',{
                  required:{
                    value:true,
                    message:'Field is empty'
                  },
                  minLength: {
                    value: 7,
                    message: "Password has to have at least 7 characters"
                  }
                })}/>
              {errors.password && <span className='text-danger'>{errors.password.message}</span>}

            </div>
            <div className="text-center">
            <button className="btn px-5 mt-3" id="buttonLogin" type="submit">Log in</button>
            {!validate && <div className="text-danger">Incorrect password or you are not singup</div>}
            </div>
          </form>
          <hr></hr>
          <div className="text-center">Don't you have an account?<Link className="text-success" to="/singup"> SingUp </Link></div>
          
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);