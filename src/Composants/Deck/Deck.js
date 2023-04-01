import React from 'react';
import Card from '../Card/Card'
import './Deck.css'

const Deck = (props) => {
    const {setLife, life} = props;
    const cards = [
        {
            title: "Monstre",
            img: "./assets/images/monster.png",
            description: "Inflige 4 dégâts",
            damage: 4,
        },
        {
            title: "Gentil",
            img: "./assets/images/monster.png",
            description: "Inflige 1 dégâts",
            damage: 1,
        },
    ];
    return (
        <div className="deck-container">
            { cards.map(card => {
                return(
                    <Card
                        key={card.title}
                        {...card}
                        setLife={setLife}
                        life={life}
                    />
                    );
                })
            }
        </div>
    );
};

export default Deck;