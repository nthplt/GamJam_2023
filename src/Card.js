import React from 'react';
import './Card.css';
import { useDrag } from 'react-dnd';
import { ItemTypes } from "./Constants";

const Card = ({attackBoss, title, img, description, damage}) => {
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
    return (
        <div className="card-container" onClick={() => attackBoss(damage)}>
            <h2 className="card-title">{title}</h2>
            <img className="card-image" src={img} alt={'Image de la carte ' + title}/>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;