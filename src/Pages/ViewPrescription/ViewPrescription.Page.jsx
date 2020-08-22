import React from "react";
import "./ViewPrscription.Style.scss";
import BackButton from "../../Components/AdminPanel/Back Button/BackButton.Component";
import { Link } from "react-router-dom";

class ViewPres extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="view-prescription-outer">
        <div className="view-prescription">
          <Link to="/dashboard/operations/orders">
            <BackButton />
          </Link>
          <div className="view-prescription-inner">
            <div className="img-viewer">
              <img
                src={require("../../Assets/img/png/view-prescription-sample.png")}
                alt="View-Prescription-Sample"
              />
            </div>
            <div className="check-list">
              <div className="call-to-actions">
                <button className="cta cta-valid">Valid</button>
                <button className="cta cta-invalid">Invalid</button>
                <button className="cta cta-query">Query</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPres;
