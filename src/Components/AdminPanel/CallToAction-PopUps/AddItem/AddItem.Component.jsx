import React from "react";
import { ReactComponent as CrossIcon } from "../../../../Assets/img/svg/close.svg";
import "./AddItem.Style.scss";
import SearchBar from "../../Search-bar/Search-box.Component";

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="query-modal-outer">
        <div className="query-modal-inner">
          <button className="close-button" onClick={this.props.closePopup}>
            <CrossIcon className="close-svg" />
          </button>
          <SearchBar />
          <textarea
            rows="4"
            cols="50"
            name="comment"
            form="usrform"
            placeholder="Describe the query..."
            className="description"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default AddItem;
