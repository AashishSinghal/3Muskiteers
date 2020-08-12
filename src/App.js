import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.Component";
import { SubOptions } from "./Components/SubOptions/SubOptions.Component";
import { CardList } from "./Components/Card-list/Card-list.Component";
import { ReactComponent as DeliveryIcon } from "./Assets/img/svg/delivery.svg";
import { ReactComponent as DispatchIcon } from "./Assets/img/svg/dispatch.svg";
import { ReactComponent as DownloadsIcon } from "./Assets/img/svg/downloads.svg";
import { ReactComponent as OptionsIcon } from "./Assets/img/svg/options.svg";
import { ReactComponent as OrderIcon } from "./Assets/img/svg/order.svg";
import { ReactComponent as PaymentsIcon } from "./Assets/img/svg/payments.svg";
import { ReactComponent as StatisticsIcon } from "./Assets/img/svg/statistics.svg";
import SearchBar from "./Components/Search-bar/Search-box.Component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      OptionsA: [
        {
          id: 1,
          notifiCount: 120,
          name: "Order",
          svg: <OrderIcon className="order opt-svg-class" />,
        },
        {
          id: 2,
          notifiCount: 121,
          name: "Dispatch",
          svg: <DispatchIcon className="dispatch opt-svg-class" />,
        },
        {
          id: 3,
          notifiCount: 122,
          name: "Delivery",
          svg: <DeliveryIcon className="delivery opt-svg-class" />,
        },
        {
          id: 4,
          notifiCount: 123,
          name: "Payments",
          svg: <PaymentsIcon className="payments opt-svg-class" />,
        },
        {
          id: 5,
          notifiCount: "none",
          name: "Statistics",
          svg: <StatisticsIcon className="statistics opt-svg-class" />,
        },
        {
          id: 6,
          notifiCount: "none",
          name: "Downloads",
          svg: <DownloadsIcon className="downloads opt-svg-class" />,
        },
        {
          id: 7,
          notifiCount: "none",
          name: "Options",
          svg: <OptionsIcon className="options opt-svg-class" />,
        },
      ],

      SubOptionsA: [
        {
          id: 1,
          notifiCount: 12,
          notifiColor: "#51c9c2",
          name: "New",
        },
        {
          id: 2,
          notifiCount: 13,
          notifiColor: "#51C971",
          name: "Assigned to Pharmacy",
        },
        {
          id: 3,
          notifiCount: 14,
          notifiColor: "#FFB01E",
          name: "Awaiting Prescription",
        },
        {
          id: 4,
          notifiCount: 15,
          notifiColor: "#003CFF",
          name: "Queried",
        },
        {
          id: 5,
          notifiCount: 16,
          notifiColor: "#FFB01E",
          name: "Awaiting Shipment",
        },
        {
          id: 6,
          notifiCount: 17,
          notifiColor: "#01FF1B",
          name: "Shipped",
        },
        {
          id: 7,
          notifiCount: 12,
          notifiColor: "#01FF1B",
          name: "Delivered",
        },
        {
          id: 8,
          notifiCount: 13,
          notifiColor: "#FF0000",
          name: "Rejected",
        },
        {
          id: 9,
          notifiCount: 14,
          notifiColor: "#FF0000",
          name: "Cancelled",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardList OptionsA={this.state.OptionsA} />
        <SubOptions SubOptionsA={this.state.SubOptionsA} />
        <TableData />
      </div>
    );
  }
}


function TableData() {
  return (
    <div className="table-data">
      <SearchBar />
      <table border="0" cellspacing="0" cellpadding="20">
        <tbody>
          <tr>
            <td>Customer Info</td>
            <td>Order Info</td>
            <td>Product</td>
            <td>Timeline</td>
            <td>Order Amount</td>
            <td>Mode of Payment</td>
            <td>View Detail</td>
          </tr>
          <tr>
            <td>adsf</td>
            <td>adsf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
          <tr>
            <td>adsf</td>
            <td>adsf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
          <tr>
            <td>adsf</td>
            <td>adsf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
          <tr>
            <td>adsf</td>
            <td>adsf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
          <tr>
            <td>adsf</td>
            <td>adsf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default App;
