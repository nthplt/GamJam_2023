import React, {useState} from 'react';
import Card from '../Card/Card'
import './Deck.css'

const Deck = ({attackBoss, nextTurn, turn}) => {
    let cardsData = [
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

    const [cards, setCards] = useState(cardsData);
    const removeCard = (index) =>
    {
        let newCards = cards;
        newCards.splice(index, 1);
        setCards(newCards);
    }
    return (
        <div className="deck-container">
            { cards.map((card, index) => {
                return(
                    <Card
                        key={card.title}
                        index={index}
                        {...card}
                        attackBoss={attackBoss}
                        removeCard={removeCard}
                        nextTurn={nextTurn}
                        turn={turn}
                    />
                    );
                })
            }
        </div>
    );
};

export default Deck;