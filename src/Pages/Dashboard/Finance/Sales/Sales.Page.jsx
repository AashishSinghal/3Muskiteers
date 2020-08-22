import React from "react";
import "./Sales.Style.scss";
import { SubOptions } from "../../../../Components/AdminPanel/SubOptions/SubOptions.Component";
import BackButton from "../../../../Components/AdminPanel/Back Button/BackButton.Component";
import { Link } from "react-router-dom";

class Sales extends React.Component {
  constructor() {
    super();
    this.state = {
      SubOptionsA: [
        {
          id: 1,
          notifiCount: 12,
          notifiColor: "#51c9c2",
          name: "Sales Details",
        },
        {
          id: 2,
          notifiCount: 13,
          notifiColor: "#51C971",
          name: "Total Orders Amount",
        },
        {
          id: 3,
          notifiCount: 14,
          notifiColor: "#FFB01E",
          name: "Returns",
        },
        {
          id: 4,
          notifiCount: 15,
          notifiColor: "#003CFF",
          name: "Total Returns",
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
      <div className="sales">
        <Link to="/dashboard/finance">
          <BackButton />
        </Link>
        <SubOptions SubOptionsA={this.state.SubOptionsA} />
      </div>
    );
  }
}

export default Sales;