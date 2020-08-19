import React from "react";
import "./LoginSignUp.Style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as UsernameIcon } from "../../../../Assets/img/svg/user.svg";
import { ReactComponent as PasswordIcon } from "../../../../Assets/img/svg/key.svg";
import { ReactComponent as CrossIcon } from "../../../../Assets/img/svg/close.svg";
import { ReactComponent as GoogleIcon } from "../../../../Assets/img/svg/google.svg";
import { ReactComponent as FacebookIcon } from "../../../../Assets/img/svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../../Assets/img/svg/twitter.svg";
import { ReactComponent as NumPadIcon } from "../../../../Assets/img/svg/numpad.svg";

class LoginSignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const isActive = document
      .getElementById("login")
      .classList.contains("not-selected");
    const notActive = document
      .getElementById("signup")
      .classList.contains("not-selected");
    if (isActive) {
      document.getElementById("login").classList.remove("not-selected");
      document.getElementById("signup").classList.add("not-selected");
      document.getElementById("logindata").classList.remove("not-active");
      document.getElementById("logindata").classList.add("data");
      document.getElementById("signupdata").classList.remove("data");
      document.getElementById("signupdata").classList.add("not-active");
    }

    if (notActive) {
      document.getElementById("signup").classList.remove("not-selected");
      document.getElementById("login").classList.add("not-selected");
      document.getElementById("signupdata").classList.remove("not-active");
      document.getElementById("signupdata").classList.add("data");
      document.getElementById("logindata").classList.remove("data");
      document.getElementById("logindata").classList.add("not-active");
    }
  }
  render() {
    return (
      <div className="user-modal-outer">
        <div className="user-modal-inner">
          <div className="user-modal">
            <button className="close-button" onClick={this.props.closePopup}>
              <CrossIcon className="close-svg" />
            </button>
            <div className="selection">
              <button id="login" className="log-in" onClick={this.handleChange}>
                Log-in
              </button>
              <button
                id="signup"
                className="sign-up not-selected"
                onClick={this.handleChange}
              >
                Sign-Up
              </button>
            </div>
            {/* 
              .
              .
              .
              Login - Div
              .
              .
              .*/}
            <div id="logindata" className="data">
              <div className="input">
                <input
                  className="mnumber"
                  type="number"
                  placeholder="Mobile Number"
                />
                <NumPadIcon className="input-svg" />
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
                <button className="login-button">Login</button>
              </Link>
              <p className="forgot">
                FORGOT <span>PASSWORD</span> ?
              </p>
            </div>
            {/* 
              .
              .
              .
              Singup - Div
              .
              .
              .*/}
            <div id="signupdata" className="not-active">
              <div className="input">
                <input
                  className="username"
                  type="username"
                  placeholder="Full Name"
                />
                <UsernameIcon className="input-svg" />
              </div>
              <div className="input">
                <input
                  className="mnumber"
                  type="number"
                  placeholder="Mobile Number"
                />
                <NumPadIcon className="input-svg" />
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
                <button className="login-button">Signup</button>
              </Link>
              <h4 className="signup-with">Sign-up with</h4>
              <ul className="extra-signup">
                <li>
                  <button className="signup-with-btn">
                    <GoogleIcon className="signup-with-svg" />
                  </button>
                </li>
                <li>
                  <button className="signup-with-btn">
                    <FacebookIcon className="signup-with-svg" />
                  </button>
                </li>
                <li>
                  <button className="signup-with-btn">
                    <TwitterIcon className="signup-with-svg" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginSignUp;
