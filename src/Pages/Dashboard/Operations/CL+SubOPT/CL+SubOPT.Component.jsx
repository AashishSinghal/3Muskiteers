import React from "react";
import "./CL+SubOPT.Style.scss";
import { Route, Switch } from "react-router-dom";
import Orders from "../Orders/Orders.Page";
import { CardList } from "../../../../Components/AdminPanel/Card-list/Card-list.Component";


class CLOPT extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Route path="/dashboard/operations">
          <CardList OptionsA={this.props.OptionsA} />
        </Route>
        <Switch>
          <Route exact path="/dashboard/operations/orders">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/dispatch">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/delivery">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/payments">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/statistics">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/downloads">
            <Orders />
          </Route>
          <Route exact path="/dashboard/operations/options">
            <Orders />
          </Route>
        </Switch>
      </>
    );
  }
}

export default CLOPT;