import React from "react";
import "./HomePage.Style.scss";
import CustLogin from "./CustLogin.Component.jsx/CustLogin.Component";
import CustHeader from "./CustHeader/CustHeader.Component";
import { Switch, Route, } from "react-router-dom";
import CardContainer from "./CustMedicineCard/CustMedicinCard.Component";
import CustomSlider from "./CustCarousel/Carousel.Component";
import BrandCard from "./CustBrandCard/CustBrandCard.component";

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
        <CustomSlider/>
        <CardContainer/>
        <h2 className = "h2-margin">Featured Brands</h2>
        <BrandCard/>
      </div>
    );
  }
}

export default CustHome;
