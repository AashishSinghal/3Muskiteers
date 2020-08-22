import React from "react";
import "./ViewDetails.Style.scss";
import { ReactComponent as BackIcon } from "../../Assets/img/svg/back.svg";
import { Link } from "react-router-dom";
// import { ReactComponent as CrossIcon } from "../../Assets/img/svg/close.svg";
import AddItem from "../../Components/AdminPanel/CallToAction-PopUps/AddItem/AddItem.Component";
import QueryPopUp from "../../Components/AdminPanel/CallToAction-PopUps/Query/Query.Component";
import RejectPopUp from "../../Components/AdminPanel/CallToAction-PopUps/Reject/Reject.Component";

class Viewdetails extends React.Component {
  constructor() {
    super();

    this.state = {
      addItem: false,
      showQuery: false,
      showReject: false,
    };
  }

  toggleAddItem() {
    this.setState({
      addItem: !this.state.addItem,
    });
  }
  toggleQuery() {
    this.setState({
      showQuery: !this.state.showQuery,
    });
  }
  toggleReject() {
    this.setState({
      showReject: !this.state.showReject,
    });
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
              <button
                className="cta cta-additem"
                onClick={this.toggleAddItem.bind(this)}
              >
                Add Item
              </button>
              <button className="cta cta-sendtodoc">Sent to Doctor</button>
              <button className="cta cta-sendtopharma">
                Send to Pharmacist
              </button>
              <button
                className="cta cta-query"
                onClick={this.toggleQuery.bind(this)}
              >
                Query
              </button>
              <button
                className="cta cta-reject"
                onClick={this.toggleReject.bind(this)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
        {this.state.addItem ? (
          <AddItem text="Close Me" closePopup={this.toggleAddItem.bind(this)} />
        ) : null}
        {this.state.showQuery ? (
          <QueryPopUp
            text="Close Me"
            closePopup={this.toggleQuery.bind(this)}
          />
        ) : null}
        {this.state.showReject ? (
          <RejectPopUp
            text="Close Me"
            closePopup={this.toggleReject.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Viewdetails;
