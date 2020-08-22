import React, { useState } from "react";
import "./NavItem.Style.scss";
import onClickOutside from "react-onclickoutside";
const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  NavItem.handleClickOutside = () => setIsOpen(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={toggle}>
        {props.icon}
      </a>
      {isOpen && props.children}
    </li>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavItem.handleClickOutside,
};

export default onClickOutside(NavItem, clickOutsideConfig);
