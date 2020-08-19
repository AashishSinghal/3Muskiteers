import React from "react";
import "./Pharmacist.Style.scss";
import { ReactComponent as DeliveryIcon } from "../../../Assets/img/svg/delivery.svg";
import { ReactComponent as DispatchIcon } from "../../../Assets/img/svg/dispatch.svg";
import { ReactComponent as DownloadsIcon } from "../../../Assets/img/svg/downloads.svg";
import { ReactComponent as OptionsIcon } from "../../../Assets/img/svg/options.svg";
import { ReactComponent as OrderIcon } from "../../../Assets/img/svg/order.svg";
import { ReactComponent as PaymentsIcon } from "../../../Assets/img/svg/payments.svg";
import { ReactComponent as StatisticsIcon } from "../../../Assets/img/svg/statistics.svg";
import { Route, Switch } from "react-router-dom";
import { CardList } from "../../../Components/AdminPanel/Card-list/Card-list.Component";
import Orders from "../Operations/Orders/Orders.Page";

class Pharmacist extends React.Component {
  constructor() {
    super();
    this.state = {
      baseUrl: {
        url: "/dashboard/pharmacist"
      },
      OptionsA: [
        {
          id: 1,
          notifiCount: 120,
          name: "Order",
          svg: <OrderIcon className="order opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/orders",
        },
        {
          id: 2,
          notifiCount: 121,
          name: "Dispatch",
          svg: <DispatchIcon className="dispatch opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/dispatch",
        },
        {
          id: 3,
          notifiCount: 122,
          name: "Delivery",
          svg: <DeliveryIcon className="delivery opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/delivery",
        },
        {
          id: 4,
          notifiCount: 123,
          name: "Payments",
          svg: <PaymentsIcon className="payments opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/payments",
        },
        {
          id: 5,
          notifiCount: "none",
          name: "Statistics",
          svg: <StatisticsIcon className="statistics opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/statistics",
        },
        {
          id: 6,
          notifiCount: "none",
          name: "Downloads",
          svg: <DownloadsIcon className="downloads opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/downloads",
        },
        {
          id: 7,
          notifiCount: "none",
          name: "Options",
          svg: <OptionsIcon className="options opt-svg-class" />,
          linkUrl: "/dashboard/pharmacist/options",
        },
      ],
    };
  }

  render() {
    return (
      <div className="pharmacist">
        <Switch>
          <Route exact path="/dashboard/pharmacist">
            <CardList OptionsA={this.state.OptionsA} />
          </Route>
          <Route exact path="/dashboard/pharmacist/orders">
            <Orders baseURl={this.state.baseUrl}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Pharmacist;
