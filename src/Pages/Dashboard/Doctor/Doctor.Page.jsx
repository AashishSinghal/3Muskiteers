import React from "react";
import "./Doctor.Style.scss";
import { ReactComponent as PaymentsIcon } from "../../../Assets/img/svg/payments.svg";
import { ReactComponent as AppointIcon } from "../../../Assets/img/svg/appointment.svg";
import { ReactComponent as StatisticsIcon } from "../../../Assets/img/svg/statistics.svg";
import { ReactComponent as DownloadsIcon } from "../../../Assets/img/svg/downloads.svg";
import { ReactComponent as OptionsIcon } from "../../../Assets/img/svg/options.svg";
import { Switch, Route } from "react-router-dom";
import { CardList } from "../../../Components/AdminPanel/Card-list/Card-list.Component";
import Appointment from "./Appointments/Appoint.Page";

class Doctor extends React.Component {
  constructor() {
    super();
    this.state = {
        OptionsA: [
            {
              id: 1,
              notifiCount: 120,
              name: "Appointments",
              svg: <AppointIcon className="order opt-svg-class" />,
              linkUrl: "/dashboard/doctor/appointments",
            },
            {
              id: 2,
              notifiCount: 123,
              name: "Payments",
              svg: <PaymentsIcon className="payments opt-svg-class" />,
              linkUrl: "/dashboard/doctor/payments",
            },
            {
              id: 3,
              notifiCount: "none",
              name: "Statistics",
              svg: <StatisticsIcon className="statistics opt-svg-class" />,
              linkUrl: "/dashboard/doctor/statistics",
            },
            {
              id: 4,
              notifiCount: "none",
              name: "Downloads",
              svg: <DownloadsIcon className="downloads opt-svg-class" />,
              linkUrl: "/dashboard/doctor/downloads",
            },
            {
              id: 5,
              notifiCount: "none",
              name: "Options",
              svg: <OptionsIcon className="options opt-svg-class" />,
              linkUrl: "/dashboard/doctor/options",
            },
          ],
    };
  }

  render() {
    return (
      <div className="Doctor">
        <Switch>
          <Route exact path="/dashboard/doctor">
            <CardList OptionsA={this.state.OptionsA} />
          </Route>
          <Route exact path="/dashboard/doctor/appointments">
            <Appointment />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Doctor;
