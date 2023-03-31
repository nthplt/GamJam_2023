import React, {Fragment, useState} from 'react';
import LifeBar from "./LifeBar";
import Boss from "./Boss";
import Deck from "./Deck";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DropZone from "./DropZone";

const GameBoard = () => {


const getLifeState = (life,setLife) => {
    console.log(life)
    console.log(setLife)
}

    return (
        <>

            <DndProvider backend={HTML5Backend}>
                <DropZone/>
                <Boss onDrop={getLifeState} />
                <Deck  />
            </DndProvider>

        </>
    );
};

export default GameBoard;