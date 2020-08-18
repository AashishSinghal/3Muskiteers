import React from "react";
import "./HomePage.Style.scss";
import CustLogin from "./CustLogin.Component.jsx/CustLogin.Component";
import CustHeader from "./CustHeader/CustHeader.Component";
import { Switch, Route, } from "react-router-dom";

class CustHome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="customer-homepage">
        <CustHeader />
        <Switch>
            <Route path="/customer-homepage/Login" component={CustLogin} />
        </Switch>
      </div>
    );
  }
}

export default CustHome;
