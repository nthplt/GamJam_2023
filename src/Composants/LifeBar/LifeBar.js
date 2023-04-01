import React from 'react';
import './LifeBar.css';

const LifeBar = ({life, initialLifeBoss}) => {
    const lifePercentage = life / initialLifeBoss * 100
    return (
        <div className="ennemy-life-bar">
            <div style={{width: lifePercentage + '%'}} className="ennemy-current-life"></div>
            {life}
        </div>
    );
};

export default LifeBar;