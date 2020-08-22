import React from "react";
import "./ViewDetails.Style.scss";
import { ReactComponent as BackIcon } from "../../Assets/img/svg/back.svg";
import { Link } from "react-router-dom";

class Viewdetails extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="view-details">
        <div className="view-details-inner">
          <Link to="/dashboard/operations/orders">
            <button className="back-button">
              <BackIcon className="back-svg" />
              Back
            </button>
          </Link>
          <div className="detail-container">
            <div className="basic-details">
              <div className="text patient-details">
                <span>Patien & Doctor Info</span>
                <span>Patien Name</span>
                <span>Doctor Name</span>
              </div>
              <div className="text order-details">
                <span>Order Number :- #466256</span>
                <span>Order Date :- DAY, DD/MM/YY</span>
                <span>Order Time :- Hr:Min AM/PM</span>
              </div>
              <div className="text shipp-details">
                <span>Shipping Address</span>
                <span>Address Line 1</span>
                <span>Address Line 1</span>
                <span>City State</span>
                <span>Pincode</span>
              </div>
            </div>
            <div className="calltoactions">
              <Link to="/dashboard/operations/orders/view-details/view-prescription">
                <button className="cta cta-viewp">View Prescription</button>
              </Link>
              <button className="cta cta-additem">Add Item</button>
              <button className="cta cta-sendtodoc">Sent to Doctor</button>
              <button className="cta cta-sendtopharma">
                Send to Pharmacist
              </button>
              <button className="cta cta-query">Query</button>
              <button className="cta cta-reject">Reject</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewdetails;
