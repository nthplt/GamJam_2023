import React, {Fragment, useState} from 'react';
import LifeBar from "./LifeBar";
import Boss from "./Boss";
import Deck from "./Deck";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DropZone from "./DropZone";

const GameBoard = () => {

    const [lifeBoss, setLifeBoss] = useState(200)
    const initialLifeBoss = 200;
    const [lifePlayer, setLifePlayer] = useState(100)
    const [turn, setTurn] = useState(1)

    const attackBoss = (damage) =>
    {
        if (lifeBoss - damage > 0) {
            setLifeBoss(lifeBoss - damage);
        } else {
            setLifeBoss(0);
        }
    }

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Boss life={lifeBoss} initialLifeBoss={initialLifeBoss} />
                <Deck
                    attackBoss={attackBoss}
                />
            </DndProvider>
        </>
    );
};

export default GameBoard;