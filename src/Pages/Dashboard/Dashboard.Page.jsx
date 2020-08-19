import React from "react";
import "./Dashboard.Style.scss";
import Header from "../../Components/AdminPanel/Header/Header.Component";
// import { Route, Link, Switch } from "react-router-dom";
import { SubOptions } from "../../Components/AdminPanel/SubOptions/SubOptions.Component";
import { CardList } from "../../Components/AdminPanel/Card-list/Card-list.Component";
import Summary from "../../Components/AdminPanel/Summary/Summary.Component";
import { Switch, Route } from "react-router-dom";
import Operations from "./Operations/Operations.Page";
import Finance from "./Finance/Finance.Page";
import Pharmacist from "./Pharmacist/Pharmaccist.Page";
import Doctor from "./Doctor/Doctor.Page";
import Helpdesk from "./Helpdesk/Helpdesk.Page";

class Dashboard extends React.Component {
  constructor({ history }) {
    super();

    this.state = {
      
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <Header />
        <Switch>
    
          <Route exact path="/dashboard" component={Summary} />
          <Route path="/dashboard/operations" component={Operations} />
          <Route path="/dashboard/finance" component={Finance} />
          <Route path="/dashboard/pharmacist" component={Pharmacist} />
          <Route path="/dashboard/doctor" component={Doctor} />
          <Route path="/dashboard/helpdesk" component={Helpdesk} />
        </Switch>


        {/* <SubOptions SubOptionsA={this.state.SubOptionsA} /> */}
      </div>
    );
  }
}

export default Dashboard;
