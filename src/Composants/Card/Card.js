import React, { useState } from "react";
import "./Card.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../Constants/Constants";

const Card = (props) => {
  // const [{ opacity }, dragRef] = useDrag(
  //     () => ({
  //         type: ItemTypes.CARD,
  //         item: props,
  //         collect: (monitor) => ({
  //             item: monitor.getItem(),
  //             opacity: monitor.isDragging() ? 0.5 : 1
  //         })
  //     }),
  //     [damage]
  // )
  const handleClick = (ev) => {
      const playerContainer = document.querySelector(".player-container");
      playerContainer.classList.add("attack");

        props.playerTurn(props);
        props.removeCard(props.index);
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
