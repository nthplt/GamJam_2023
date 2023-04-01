import React from 'react';
import './menu.css'

const Menu = () => {

    let dataFromAnotherGame;

    localStorage.getItem("GJ-stage") ? dataFromAnotherGame = true : dataFromAnotherGame = false;

    return (
        <div className="main-container">
            <video id="background-video" className="video-bg" autoPlay loop muted>
                <source src="assets/videos/bg-menu.mp4" type="video/mp4"></source>
            </video>
            <div className="menu-container">
                <div className="h1-container">
                    <h1 className="h1">Jeu.exe</h1>
                </div>
                <div className="btn-actions">
                    <button>Commencer une partie</button>
                    {
                        dataFromAnotherGame ? <button>Reprendre la Partie</button> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;