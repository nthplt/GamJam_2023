import React from 'react';
import LifeBar from "../LifeBar/LifeBar";
import "./Player.css"
const Player = ({life, initialLifePlayer}) => {
    return (
        <div className="player-container "  >
            <LifeBar
                life={life}
                initialLifeBoss={initialLifePlayer}
            />
        </div>
    );
};

export default Player;