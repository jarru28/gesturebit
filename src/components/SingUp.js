import React, { useCallback,useContext } from "react";
import { withRouter } from "react-router";
import { Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

import {app,db} from "../firebase";
import { AuthContext } from "./Auth.js";
import '../styles/Login.css';
let validate=true;
const SignUp = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const handleSignUp = useCallback(
    async data => {
    try {
      await db.collection('user').doc().set({
        name:data.name,
        email:data.email,
        type:'free'
    });
      await app.auth().createUserWithEmailAndPassword(data.email, data.password);
       
      history.push("/bots");
      Swal.fire({
        title:'Singup Succesfully!',
        icon:'success',
        showConfirmButton: false,
        timer: 1000,
        position:'top'
    });
    } catch (error) {
      alert(error)
      validate=false;
    }
  }, [history]);

  let InEmail='';
  let InPass=''
  let InName=''
  if(errors.email)InEmail='inputLogErr'; else InEmail='inputLog';
  if(errors.name)InName='inputLogErr'; else InName='inputLog';
  if(errors.password)InPass='inputLogErr'; else InPass='inputLog';

  if (currentUser) {
    return <Redirect to="/bots" />;
  }

  return (
    <div className="container-fluid vh-100" id='bodyLogin'>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-11 col-md-7 col-lg-5 col-xl-4 " id='cardLogin'>
          <h2 className="text-center mb-5" id="titleLogin">Sing up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form-outline form-white mb-4 ">
              <label className="form-label " id="labelLogin">
               Name
                </label>
                <input name="name" className="form-control " id={InName} placeholder="Write your Name"
                {...register('name',{
                  required:{
                    value:true,
                    message:'Field is empty'
                  }
                })} />
                {errors.name && <span className='text-danger'>{errors.name.message}</span>}
              
            </div>

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
                    message: "El format is not correct"
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
            <button className="btn px-5 mt-3" id="buttonLogin" type="submit">Sing up</button>
            {!validate && <div className="text-danger">You are alredy registered</div>}
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);