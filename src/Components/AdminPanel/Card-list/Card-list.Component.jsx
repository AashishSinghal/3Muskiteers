import React from "react";
import { Card } from "../Card/Card.Component";
import "./Card-list.style.css";
import { Link } from "react-router-dom";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.OptionsA.map((cardOptions) => (
        <Link to={cardOptions.linkUrl}>
          <Card key={cardOptions.id} cardOptions={cardOptions} />
        </Link>
      ))}
    </div>
  );
};
