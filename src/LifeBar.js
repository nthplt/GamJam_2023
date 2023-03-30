import React from 'react';
import './LifeBar.css';

const LifeBar = (props) => {
    const {life} = props;
    return (
        <div className="ennemy-life-bar">
            <div style={{width: life + '%'}} className="ennemy-current-life"></div>
            {life}
        </div>
    );
};

export default LifeBar;