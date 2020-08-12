import React from "react";

import "./Card.style.css";

export const Card = (props) => (
  <div className="card-container">
    {props.cardOptions.notifiCount !== "none" && (
      <div className="opt-num">
        <span className="opt-num-span">{props.cardOptions.notifiCount}</span>
      </div>
    )}

    {props.cardOptions.svg}

    <span className="opt-span"> {props.cardOptions.name} </span>
    {/* <p>{props.cardOptions.email}</p> */}
  </div>
);
