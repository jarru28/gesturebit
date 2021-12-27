import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link} from "react-router-dom";
import {app} from "../firebase.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
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

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/bots" />;
  }

  return (
    <div>
        <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      Don't you have an account?<Link className="" to="/singup"> SingUp </Link>
    </div>
  );
};

export default withRouter(Login);