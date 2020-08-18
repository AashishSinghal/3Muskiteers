import React from "react";
import "./TableData.Styls.scss";
import CustomerData from "./Customer.Data";
import Viewdetails from "../../../Pages/VeiwDetails/ViewDetails.Pages";

class TableData extends React.Component {
  constructor() {
    super();
    this.state = {
      CustomerData: CustomerData,
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
      <div className="table-data">
        <table border="0" cellSpacing="0" cellPadding="20">
          <tbody>
            <tr>
              {this.state.CustomerData.map((CustData) => (
                <td key={CustData.id}>{CustData.title}</td>
              ))}
            </tr>
            <tr>
              <td>
                Customer Name <br />
                City___Pincode
              </td>
              <td>
                Order Name
                <br />
                Full Date___Time
                <br />
                Detail
              </td>
              <td>
                Product Name
                <br />
                Qty.
                <br />
                Details
              </td>
              <td>
                Order Status
                <br />
                Full Date___Time
                <br />
                Detail
              </td>
              <td>1000 ₹</td>
              <td>Prepaid / COD</td>
              <td>
                <button className='view-details-btn' onClick={this.togglePopup.bind(this)}>
                  View Details
                </button>

                {this.state.showPopup ? (
                  <Viewdetails
                    text="Close Me"
                    closePopup={this.togglePopup.bind(this)}
                  />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
