import React from "react";
import "./HomePage.Style.scss";
import CustLogin from "./CustLogin.Component.jsx/CustLogin.Component";
import CustHeader from "./CustHeader/CustHeader.Component";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./CustMedicineCard/CustMedicinCard.Component";
import CustomSlider from "./CustCarousel/Carousel.Component";
import BrandCard from "./CustBrandCard/CustBrandCard.component";
import ItemPage from "../ItemPage/ItemPage.Page";

class CustHome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="customer-homepage">
        <Switch>
          <Route exact path="/customer-homepage">
            <CustHeader />
            <CustLogin />
            <CustomSlider />
            <CardContainer />
            <h2 className="h2-margin">Featured Brands</h2>
            <BrandCard />
          </Route>
          <Route exact path="/customer-homepage/items">
            <ItemPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default CustHome;
