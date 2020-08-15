import React from "react";
import "./Login.Style.scss";
import { Route, Link } from "react-router-dom";
import { ReactComponent as UsernameIcon } from "../../Assets/img/svg/user.svg";
import { ReactComponent as PasswordIcon } from "../../Assets/img/svg/key.svg";
import { ReactComponent as LoginIcon } from "../../Assets/img/svg/login-svg.svg";

const Login = ({ history }) => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="left-container">
          <h1 className="heading"> MedShipp</h1>
        </div>
        <div className="right-container">
          <LoginIcon className='login-svg' />
          <h1 className="login-header">User Login</h1>
          <div className="input">
            <input
              className="username"
              type="username"
              placeholder="Username"
            />
            <UsernameIcon className="input-svg" />
          </div>
          <div className="input">
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
            <PasswordIcon className="input-svg" />
          </div>
          <Link to="/dashboard">
            <button className='login-button'>Login</button>
          </Link>
          <p className='forgot'>FORGOT <span>PASSWORD</span> ?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
