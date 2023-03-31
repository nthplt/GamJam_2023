import React, {useState} from 'react';
import './Boss.css';
import LifeBar from "./LifeBar";

const Boss = ({onDrop}) => {

    const [life , setLife] = useState(100)


    return (
        <div className="boss-container" >
            <button onClick={() => onDrop(life,setLife)}></button>
           <LifeBar life={life}/>
        </div>
    );
};

export default Boss;