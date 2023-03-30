import React from 'react';
import './Boss.css';
import {useDrop} from "react-dnd";
import {ItemTypes} from "./Constants";

const Boss = (props) => {
    const {life, setLife} = props;
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CARD,
            drop: (monitor) => setLife(life - monitor.damage),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                getDropResult: !!monitor.getDropResult()
            }),
        }),
    []
    )
    return (
        <div className="boss-container" ref={drop}>
            { isOver && (
                <div className="droppable"></div>
            )}
        </div>
    );
};

export default Boss;