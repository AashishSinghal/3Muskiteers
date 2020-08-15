import React, { useState } from "react";
import "../Header/Header.Style.css";
import { Route, Link } from "react-router-dom";
import { ReactComponent as BellIcon } from "../../Assets/img/svg/bell.svg";
import { ReactComponent as DoctorIcon } from "../../Assets/img/svg/doctor.svg";
import { ReactComponent as DownArrowIcon } from "../../Assets/img/svg/down-arrow.svg";
import { ReactComponent as FinanceIcon } from "../../Assets/img/svg/finance.svg";
import { ReactComponent as HelpdeskIcon } from "../../Assets/img/svg/helpdesk.svg";
import { ReactComponent as LogoutIcon } from "../../Assets/img/svg/logout.svg";
import { ReactComponent as OperationsIcon } from "../../Assets/img/svg/operations.svg";
import { ReactComponent as PersonIcon } from "../../Assets/img/svg/person.svg";
import { ReactComponent as PharmacistIcon } from "../../Assets/img/svg/pharmacist.svg";
import { ReactComponent as QuestionIcon } from "../../Assets/img/svg/question.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Navbar>
        <li className="nav-item main-name">
          <span className="medshipp">MedShipp</span>
        </li>
        <NavItem icon={<PersonIcon className="person navItem" />} />
        <NavItem icon={<BellIcon className="bell navItem" />} />
        <NavItem icon={<QuestionIcon className="about navItem" />} />
        <NavItem icon={<DownArrowIcon className="down-arrow navItem" />}>
          <DropdownMenu></DropdownMenu>
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
      <DropdownItem leftIcon={<OperationsIcon />}>Operations</DropdownItem>
      <DropdownItem leftIcon={<FinanceIcon />}>Finance</DropdownItem>
      <DropdownItem leftIcon={<PharmacistIcon />}>Pharmacist</DropdownItem>
      <DropdownItem leftIcon={<DoctorIcon />}>Doctor</DropdownItem>
      <DropdownItem leftIcon={<HelpdeskIcon />}>Helpdesk</DropdownItem>
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
