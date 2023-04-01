import React from "react";
import "./Card.css";

const Card = (props) => {
    const handleClick = (ev) => {
        const attack = props.attacks;
        props.removeCard(props.index);
        props.playerTurn(attack);
    };

  const { title, img, description } = props;

  return (
    <div className="card-container" onClick={() => handleClick()}>
      <h2 className="card-title">{title}</h2>
      <img
        className="card-image"
        src={img}
        alt={"Image de la carte " + title}
      />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
