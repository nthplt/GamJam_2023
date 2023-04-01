import React from 'react';
import './Card.css';
import { useDrag } from 'react-dnd';
import { ItemTypes } from "../Constants/Constants";

const Card = ({attackBoss, removeCard, nextTurn, turn, index, title, img, description, damage}) => {
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

    const handleClick = (ev) =>
    {
        if (turn === 1) {
            const playerContainer = document.querySelector('.player-container');
            playerContainer.classList.add('attack');
            nextTurn()
            attackBoss(damage)
            removeCard(index)
        }

    }

    return (
        <div className="card-container" onClick={() => handleClick()}>
            <h2 className="card-title">{title}</h2>
            <img className="card-image" src={img} alt={'Image de la carte ' + title}/>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;