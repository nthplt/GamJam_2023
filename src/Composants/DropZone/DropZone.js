import React from 'react';
import {useDrop} from "react-dnd";
import {ItemTypes} from "../Constants/Constants";

const DropZone = ({life ,setLife}) => {

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CARD,
            drop: (monitor) => {
                setLife(life - monitor.damage)

            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                getDropResult: !!monitor.getDropResult()
            }),
        }),
        [life]
    )

    return (
        <div ref={drop}>
            { isOver && (
                <div className="droppable"></div>
            )}
        </div>
    );
};

export default DropZone;