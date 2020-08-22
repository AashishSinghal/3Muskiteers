import React from "react";
import "./CustBrandCard.style.scss";
import med from "../../../Assets/img/svg/med.jpg";

const Card = (props) => (
  <div className="card-ws">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container-outer">
    <div className="cards-container">
      {props.cards.map((card) => (
        <Card title={card.title} imgUrl={card.imgUrl} />
      ))}
    </div>
  </div>
);

class BrandCard extends React.Component {
  render() {
    const cardsData = [
      { id: 1, title: "Detol", imgUrl: med },
      { id: 2, title: "Liveasy", imgUrl: med },
      { id: 3, title: "Sugar-Free", imgUrl: med },
      { id: 4, title: "Emami", imgUrl: med },
      { id: 5, title: "Marico", imgUrl: med },
      { id: 6, title: "Protin-X", imgUrl: med },
      { id: 7, title: "Voloni", imgUrl: med },
      { id: 8, title: "Nestle", imgUrl: med },
      { id: 9, title: "Himalaya", imgUrl: med },
      { id: 10, title: "N95 Masks", imgUrl: med },
    ];

    return (
      <div className="container-brand">
        <CardContainer cards={cardsData} />
      </div>
    );
  }
}
export default BrandCard;
