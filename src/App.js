import React, { Component } from "react";
import "./App.css";
import Login from "./Pages/Login/Login.Page";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.Page";

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
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
