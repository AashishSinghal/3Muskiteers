import React from "react";
import "./LoginSignUp.Style.scss";
import { ReactComponent as CrossIcon } from "../../../../Assets/img/svg/close.svg";

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
      document.getElementById('logindata').classList.remove('not-active')
      document.getElementById('logindata').classList.add('data')
      document.getElementById('signupdata').classList.remove('data')
      document.getElementById('signupdata').classList.add('not-active')
    }

    if (notActive) {
      document.getElementById("signup").classList.remove("not-selected");
      document.getElementById("login").classList.add("not-selected");
      document.getElementById('signupdata').classList.remove('not-active')
      document.getElementById('signupdata').classList.add('data')
      document.getElementById('logindata').classList.remove('data')
      document.getElementById('logindata').classList.add('not-active')

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
              <button
                id="login"
                className="log-in"
                onClick={this.handleChange}
              >
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
            <div id='logindata' className='data'>
              <h1>Login</h1>
            </div>
            <div id='signupdata' className='not-active'>
              <h1>Signup</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginSignUp;
