import React, { Component, useState } from "react";
// import { CSSTransition } from 'react-transition-group';
import "./App.css";
import { CardList } from "./Components/Card-list/Card-list.Component";
import Header from "./Components/Header/Header.Component";
import { ReactComponent as BellIcon } from "./Assets/img/svg/bell.svg";
import { ReactComponent as DeliveryIcon } from "./Assets/img/svg/delivery.svg";
import { ReactComponent as DispatchIcon } from "./Assets/img/svg/dispatch.svg";
import { ReactComponent as DoctorIcon } from "./Assets/img/svg/doctor.svg";
import { ReactComponent as DownArrowIcon } from "./Assets/img/svg/down-arrow.svg";
import { ReactComponent as DownloadsIcon } from "./Assets/img/svg/downloads.svg";
import { ReactComponent as FinanceIcon } from "./Assets/img/svg/finance.svg";
import { ReactComponent as HelpdeskIcon } from "./Assets/img/svg/helpdesk.svg";
import { ReactComponent as OperationsIcon } from "./Assets/img/svg/operations.svg";
import { ReactComponent as OptionsIcon } from "./Assets/img/svg/options.svg";
import { ReactComponent as OrderIcon } from "./Assets/img/svg/order.svg";
import { ReactComponent as PaymentsIcon } from "./Assets/img/svg/payments.svg";
import { ReactComponent as PersonIcon } from "./Assets/img/svg/person.svg";
import { ReactComponent as PharmacistIcon } from "./Assets/img/svg/pharmacist.svg";
import { ReactComponent as QuestionIcon } from "./Assets/img/svg/question.svg";
import { ReactComponent as StatisticsIcon } from "./Assets/img/svg/statistics.svg";

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
          notifiCount: 124,
          name: "Statistics",
          svg: <StatisticsIcon className="statistics opt-svg-class" />,
        },
        {
          id: 6,
          notifiCount: 125,
          name: "Downloads",
          svg: <DownloadsIcon className="downloads opt-svg-class" />,
        },
        {
          id: 7,
          notifiCount: 126,
          name: "Options",
          svg: <OptionsIcon className="options opt-svg-class" />,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Navbar>
          <NavItem icon={<PersonIcon className="person navItem" />} />
          <NavItem icon={<BellIcon className="bell navItem" />} />
          <NavItem icon={<QuestionIcon className="about navItem" />} />
          <NavItem icon={<DownArrowIcon className="down-arrow navItem" />}>
            {/* Dropdown goes Here */}
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
        <CardList OptionsA={this.state.OptionsA} />
      </div>
    );
  }
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button opt-icon" style={{ marginRight: "15px" }}>
          {props.leftIcon}
        </span>

        {props.children}
        {/* <span className="icon-button">{props.rightIcon}</span> */}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<OperationsIcon />}>Operations</DropdownItem>
      <DropdownItem leftIcon={<FinanceIcon />}>Finance</DropdownItem>
      <DropdownItem leftIcon={<PharmacistIcon />}>Pharmacist</DropdownItem>
      <DropdownItem leftIcon={<DoctorIcon />}>Doctor</DropdownItem>
      <DropdownItem leftIcon={<HelpdeskIcon />}>Helpdesk</DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
