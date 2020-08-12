import React, { useState } from "react";
import "../Header/Header.Style.css";
import { ReactComponent as BellIcon } from "../../Assets/img/svg/bell.svg";
import { ReactComponent as DoctorIcon } from "../../Assets/img/svg/doctor.svg";
import { ReactComponent as DownArrowIcon } from "../../Assets/img/svg/down-arrow.svg";
import { ReactComponent as FinanceIcon } from "../../Assets/img/svg/finance.svg";
import { ReactComponent as HelpdeskIcon } from "../../Assets/img/svg/helpdesk.svg";
import { ReactComponent as OperationsIcon } from "../../Assets/img/svg/operations.svg";
import { ReactComponent as PersonIcon } from "../../Assets/img/svg/person.svg";
import { ReactComponent as PharmacistIcon } from "../../Assets/img/svg/pharmacist.svg";
import { ReactComponent as QuestionIcon } from "../../Assets/img/svg/question.svg";

function Header() {
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
