import React from "react";
import "./Reject.Style.scss";
import { ReactComponent as CrossIcon } from "../../../../Assets/img/svg/close.svg";
import SearchBar from "../../Search-bar/Search-box.Component";

class RejectPopup extends React.Component {
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
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Describe the query...' className="description">
          </textarea>
        </div>
      </div>
    );
  }
}

export default RejectPopup;
