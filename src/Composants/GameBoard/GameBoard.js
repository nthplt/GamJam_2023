import React, {Fragment, useState} from 'react';
import LifeBar from "../LifeBar/LifeBar";
import Boss from "../Boss/Boss";
import Deck from "../Deck/Deck";
import Player from "../Player/Player";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DropZone from "../DropZone/DropZone";

const GameBoard = () => {

    /**
     * Propriétés concernant le boss
     */

    const [lifeBoss, setLifeBoss] = useState(200)
    const initialLifeBoss = 200;
    const attackBoss = (damage) =>
    {
        if (lifeBoss - damage > 0) {
            setLifeBoss(lifeBoss - damage);
        } else {
            setLifeBoss(0);
        }

        nextTurn()
    }

    /**
     * Propriétés concernant le joueur
     */

    const [lifePlayer, setLifePlayer] = useState(100)
    const initialLifePlayer = 100;

    /**
     * Propriétés concernant le déroulement du jeu
     * turn = 1 // Tour du joueur
     * turn = 2 // Tour du monstre
     */

    const [turn, setTurn] = useState(1)
    const nextTurn = () =>
    {
        turn === 1 ? setTurn(2) : setTurn(1);
    }



    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div>{turn === 1 ? "À vous de jouer" : "C'est à l'adversaire de jouer"}</div>
                <Boss life={lifeBoss} initialLifeBoss={initialLifeBoss} />
                <Player life={lifePlayer} initialLifePlayer={initialLifePlayer}/>
                <Deck
                    attackBoss={attackBoss}
                    nextTurn={nextTurn}
                    turn={turn}
                />
            </DndProvider>
        </>
    );
};

export default GameBoard;