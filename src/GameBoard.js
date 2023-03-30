import React, {Fragment, useState} from 'react';
import LifeBar from "./LifeBar";
import Boss from "./Boss";
import Deck from "./Deck";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const GameBoard = () => {
    const [life, setLife] = useState(100)
    return (
        <>
            <LifeBar life={life} />
            <DndProvider backend={HTML5Backend}>
                <Boss setLife={setLife} life={life} />
                <Deck setLife={setLife} life={life} />
            </DndProvider>

        </>
    );
};

export default GameBoard;