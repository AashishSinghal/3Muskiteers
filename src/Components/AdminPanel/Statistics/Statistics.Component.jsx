import React from "react";
import "./Statistics.Style.scss";

import { ReactComponent as ArrowIcon } from "../../../Assets/img/svg/arrow.svg";

export const Statistics = (props) => {
  return (
    <div className="stats">
      {props.StatsData.bgsvg}
      {console.log}
      <p className="value p-tag">{props.StatsData.value}</p>
      <p className="title p-tag">{props.StatsData.title}</p>
      <div className="more">
        <p className="more-info">More Info</p>
        <ArrowIcon className="more-svg" />
      </div>
    </div>
  );
};
