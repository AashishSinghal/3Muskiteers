import React, { useState } from "react";
import "./SubOptions.Style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import TableData from "../TableData/TableData.Component";
import SearchBar from "../Search-bar/Search-box.Component";
import Viewdetails from "../../../Pages/VeiwDetails/ViewDetails.Pages";

export const SubOptions = (props) => {
  return (
    <div className="sub-options">
      <Tabs>
        <TabList>
          {props.SubOptionsA.map((subOpt) => (
            <Tab key={subOpt.id}>
              <SuboptName key={subOpt.id} subOpt={subOpt} is />
              {/* {props.SubOptionsA.map((subOpt) => (
              ))} */}
            </Tab>
          ))}
        </TabList>
        <SearchBar />
        <TabPanel>
          <TableData />
        </TabPanel>
        <TabPanel>
          <AssToPhas />
        </TabPanel>
        <TabPanel>
          <AwaitPres />
        </TabPanel>
      </Tabs>

      {/* {props.OptionsA.map((cardOptions) => (
        <Card key={cardOptions.id} cardOptions={cardOptions} />
      ))} */}
    </div>
  );
};

const SuboptName = (props) => {
  const bgColor = props.subOpt.notifiColor;
  return (
    <div className="suboptname">
      <span className="opt-count" style={{ backgroundColor: bgColor }}>
        {props.subOpt.notifiCount}
      </span>
      <span className="opt-name">{props.subOpt.name}</span>
    </div>
  );
};

class AssToPhas extends React.Component {
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
      <div className="table-data">
        <table border="0" cellSpacing="0" cellPadding="20">
          <tbody>
            <tr>
              <td>Pharmacy Info</td>
              <td>Order Info</td>
              <td>Product Info</td>
              <td>Timeline</td>
              <td>Order Value</td>
              <td>Mode Of Payment</td>
              <td></td>
            </tr>
            <tr>
              <td>
                Pharmacy Name <br />
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
                <button
                  className="view-details-btn"
                  onClick={this.togglePopup.bind(this)}
                >
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

class AwaitPres extends React.Component {
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
      <div className="table-data">
        <table border="0" cellSpacing="0" cellPadding="20">
          <tbody>
            <tr>
              <td>Patient Info</td>
              <td>Appointment</td>
              <td>Product Info</td>
              <td>Timeline</td>
              <td></td>
            </tr>
            <tr>
              <td>
                Patient Name <br />
                City___Pincode
              </td>
              <td>
                Appointment ID
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
              <td>
                <button
                  className="view-details-btn"
                  onClick={this.togglePopup.bind(this)}
                >
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