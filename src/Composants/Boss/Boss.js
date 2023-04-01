import React, {useState} from 'react';
import './Boss.css';
import LifeBar from "../LifeBar/LifeBar";

const Boss = ({life, initialLifeBoss}) => {

    return (
        <div className="boss-container">
           <LifeBar
               life={life}
               initialLifeBoss={initialLifeBoss}
           />
        </div>
    );
};

export default Boss;