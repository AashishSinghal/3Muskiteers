import React from "react";
import "./BackButton.Style.scss";
import { ReactComponent as BackIcon } from "../../../Assets/img/svg/back.svg";


export default function BackButton() {
  return (
    <button className="back-button">
      <BackIcon className="back-svg" />
      Back
    </button>
  );
}
