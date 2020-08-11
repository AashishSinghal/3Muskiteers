import React from "react";
import { Card } from "../Card/Card.Component";
import "./Card-list.style.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.OptionsA.map((cardOptions) => (
        <Card key={cardOptions.id} cardOptions={cardOptions} />
      ))}
    </div>
  );
};
