import React from "react";
import './Meter.Style.scss'
import ProgressBar from "react-customizable-progressbar";

const Meter = () => (
  <div className="item">
    <div className="title">
      <h1>Target Progress</h1>
    </div>

    <ProgressBar
      radius={100}
      progress={75}
      strokeWidth={18}
      strokeColor="#51c9c2"
      strokeLinecap="round"
      trackStrokeWidth={18}
      counterClockwise
    >
      <div className="indicator">
        <div>{75}%</div>
      </div>
    </ProgressBar>
  </div>
);

export default Meter;
