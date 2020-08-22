import React from "react";
import "./CustMedicineCard.style.scss";
import med from "../../../Assets/img/svg/med.jpg";

const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="med-card">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

class MedCard extends React.Component {
  render() {
    const cardsData = [
      { id: 1, title: "CARD 1", content: "Clark Kent", imgUrl: med },
      { id: 2, title: "CARD 2", content: "Bruce Wayne", imgUrl: med },
      { id: 3, title: "CARD 3", content: "Peter Parker", imgUrl: med },
      { id: 4, title: "CARD 4", content: "Tony Stark", imgUrl: med },
      { id: 5, title: "CARD 5", content: "Reed Richards", imgUrl: med },
      { id: 6, title: "CARD 6", content: "Wade Wilson", imgUrl: med },
      { id: 7, title: "CARD 7", content: "Peter Quill", imgUrl: med },
      { id: 8, title: "CARD 8", content: "Steven Rogers", imgUrl: med },
      { id: 9, title: "CARD 9", content: "Bruce Banner", imgUrl: med },
      { id: 10, title: "CARD 10", content: "Vincent Strange", imgUrl: med },
    ];

    return (
      <div className="outer-contaniner">
        <div className="container">
          <CardContainer cards={cardsData} />
        </div>
      </div>
    );
  }
}
export default MedCard;
