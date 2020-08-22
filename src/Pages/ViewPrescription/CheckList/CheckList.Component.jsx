import React from "react";
import "./CheckList.Style.scss";

class CheckList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <h3>A Valid Prescription Must Contain all the below mentioned -</h3>
        <label class="control control--checkbox">
          Proper Prescription Letterhead / Pad of Doctor, Clinic or a Hospital.
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <h4>Clearly Visible -</h4>
        <label class="control control--checkbox">
          1. Patient Name
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          2. Doctor Name
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          3. Qualification of Doctor
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          4. Registration Number
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          5. Address & Contact Number
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          Carries the RX symbol, followed by the name of the medicines,
          recommended strengths and dosage & duration of the course, any
          relation with the meals.
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          Date of issue & Doctor's Signature
          <input type="checkbox" />
          <div class="control__indicator"></div>
        </label>
        {/* <label class="control control--checkbox">
          Disabled
          <input type="checkbox" disabled="disabled" />
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">
          Disabled & checked
          <input type="checkbox" disabled="disabled" checked="checked" />
          <div class="control__indicator"></div>
        </label> */}
      </>
    );
  }
}

export default CheckList;
