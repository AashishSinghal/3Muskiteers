import React from "react";
import "./CustHeader.Style.scss";
import { ReactComponent as LogoIcon } from "../../../Assets/img/svg/med-shipp.svg";
import { ReactComponent as LocationIcon } from "../../../Assets/img/svg/location.svg";
import { ReactComponent as DownArrowIcon } from "../../../Assets/img/svg/down-arrow.svg";
import { ReactComponent as SearchIcon } from "../../../Assets/img/svg/search.svg";
import { ReactComponent as CartIcon } from "../../../Assets/img/svg/cart.svg";
// import { ReactComponent as ProfilIcon } from "../../../Assets/img/svg/person.svg";
import CustLogin from "../CustLogin.Component.jsx/CustLogin.Component";

class CustHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="customer-header">
        <div className="headertoprow">
          <ul className="first-ul">
            <li>
              <LogoIcon className="logo-svg" />
            </li>
            <li className="custsearchbar">
              <LocationIcon className="location-svg" />
              <input
                type="text"
                placeholder="Select Pincode"
                className="custpincode"
              />
              <DownArrowIcon className="downarrow-svg" />
              <div className="cust-vl"></div>
              <input
                type="search"
                placeholder="Search Medicine & Healthcare Products..."
                className="custsearchinput"
              />
              <div className="cust-vl"></div>
              <SearchIcon className="custsearch-svg" />
            </li>
            <li>
              <CartIcon className="cart-svg" />
            </li>
            {/* <li className='login-li'>
              <ProfilIcon className="profile-svg" />
              <span className="login-span">Login</span>
              <div class="vl"></div>
              <span className="signup-span">Signup</span>
            </li> */}
            <CustLogin />

          </ul>
        </div>
        <div className="headerbottomrow">
          <ul className="left-list">
            <li>Order Now</li>
            <li>Ask a Doctor</li>
            <li>Corona Care</li>
            <li>Healthcare Products</li>
            <li>Featured</li>
          </ul>
          <ul className="right-list">
            <li>FAQs</li>
            <li>Help ?</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CustHeader;
