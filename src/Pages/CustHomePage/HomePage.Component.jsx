import React from "react";
import "./HomePage.Style.scss";
import CustLogin from "./CustLogin.Component.jsx/CustLogin.Component";
import Carousel from "./CustCarousel/Carousel.Component"
import CustHeader from "./CustHeader/CustHeader.Component";
import { Switch, Route, } from "react-router-dom";
import MedCard from "./CustMedicineCard/CustMedicinCard.Component";

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
        <Carousel/>
        <MedCard/>
      </div>
    );
  }
}

export default CustHome;
