import React, { Component } from "react";
import "./App.css";
import Login from "./Pages/Login/Login.Page";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.Page";
import CustHome from "./Pages/CustHomePage/HomePage.Component";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/3Muskiteers" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/custome-homepage" component={CustHome} />
        </Switch>
      </div>
    );
  }
}

export default App;
