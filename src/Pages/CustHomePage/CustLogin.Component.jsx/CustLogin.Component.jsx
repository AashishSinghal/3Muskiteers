import React from "react";
import "./CustLogin.Style.scss";
import { ReactComponent as ProfilIcon } from "../../../Assets/img/svg/person.svg";
import LoginSignUp from "./LoginSignUp/LoginSignUp.Component";


class CustLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <>
      <li className="login-li">
        <ProfilIcon className="profile-svg" />
        <button className="login-signup-btn" onClick={this.togglePopup.bind(this)} >
          <span className="login-span">Login</span>
          <div className="vl"></div>
          <span className="signup-span">Signup</span>
        </button>
      </li>
      {this.state.showPopup ? (
        <LoginSignUp
          text="Close Me"
          closePopup={this.togglePopup.bind(this)}
        />
      ) : null}
      </>
    );
  }
}

export default CustLogin;
