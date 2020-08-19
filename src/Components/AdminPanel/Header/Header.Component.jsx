import React, { useState } from "react";
import "../Header/Header.Style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as BellIcon } from "../../../Assets/img/svg/bell.svg";
import { ReactComponent as DoctorIcon } from "../../../Assets/img/svg/doctor.svg";
import { ReactComponent as DownArrowIcon } from "../../../Assets/img/svg/down-arrow.svg";
import { ReactComponent as FinanceIcon } from "../../../Assets/img/svg/finance.svg";
import { ReactComponent as HelpdeskIcon } from "../../../Assets/img/svg/helpdesk.svg";
import { ReactComponent as LogoutIcon } from "../../../Assets/img/svg/logout.svg";
import { ReactComponent as OperationsIcon } from "../../../Assets/img/svg/operations.svg";
import { ReactComponent as PersonIcon } from "../../../Assets/img/svg/person.svg";
import { ReactComponent as PharmacistIcon } from "../../../Assets/img/svg/pharmacist.svg";
import { ReactComponent as QuestionIcon } from "../../../Assets/img/svg/question.svg";
import { ReactComponent as DashboardIcon } from "../../../Assets/img/svg/dashboard.svg";


class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Navbar>
        <li className="nav-item main-name">
          <Link to="/custome-homepage">
            <span className="medshipp">MedShipp</span>
          </Link>
        </li>
        <NavItem icon={<PersonIcon className="person navItem" />} />
        <NavItem icon={<BellIcon className="bell navItem" />} />
        <NavItem icon={<QuestionIcon className="about navItem" />} />
        <NavItem icon={<DownArrowIcon className="down-arrow navItem" />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
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
      </a>
    );
  }

  return (
    <div className="dropdown">
      <Link to='/dashboard' >
        <DropdownItem leftIcon={<DashboardIcon/>}>Dashboard</DropdownItem>
      </Link>
      <Link to="/dashboard/operations">
        <DropdownItem leftIcon={<OperationsIcon />}>Operations</DropdownItem>
      </Link>

      <Link to="/dashboard/finance">
        <DropdownItem leftIcon={<FinanceIcon />}>Finance</DropdownItem>
      </Link>
      <Link to="/dashboard/pharmacist">
        <DropdownItem leftIcon={<PharmacistIcon />}>Pharmacist</DropdownItem>
      </Link>
      <Link to="/dashboard/doctor">
        <DropdownItem leftIcon={<DoctorIcon />}>Doctor</DropdownItem>
      </Link>
      <Link to="/dashboard/helpdesk">
        <DropdownItem leftIcon={<HelpdeskIcon />}>Helpdesk</DropdownItem>
      </Link>
      <Link to="/">
        <DropdownItem leftIcon={<LogoutIcon />}>Logout</DropdownItem>
      </Link>
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

export default Header;
