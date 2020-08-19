import React from "react";
import "./Summary.Style.scss";
import { Statistics } from "../Statistics/Statistics.Component";
import { ReactComponent as BoxesIcon } from "../../../Assets/img/svg/boxes.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/img/svg/money.svg";
import { ReactComponent as CustomerIcon } from "../../../Assets/img/svg/customer.svg";
import { ReactComponent as EbitdaIcon } from "../../../Assets/img/svg/ebitda.svg";
import Meter from "../Meter/Meter.Components";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      StatsData: [
        {
          id: "1",
          value: "1500",
          title: "Total Order",
          bgsvg: <BoxesIcon className="bg-svg" />,
        },
        {
          id: "2",
          value: "150000 ₹",
          title: "Total Value",
          bgsvg: <MoneyIcon className="bg-svg" />,
        },
        {
          id: "3",
          value: "1234",
          title: "Customers",
          bgsvg: <CustomerIcon className="bg-svg" />,
        },
        {
          id: "4",
          value: "3000 ₹",
          title: "EBITDA",
          bgsvg: <EbitdaIcon className="bg-svg" />,
        },
      ],

      Progress: {
          prog: ""
      }
    };
  }

  render() {
    return (
      <div className="summary">
        <Meter />
        <div className="summary-container">
          {this.state.StatsData.map((Stats) => (
            <Statistics key={Stats.id} StatsData={Stats} />
          ))}
        </div>
      </div>
    );
  }
}


export default Summary;
