import React, {useEffect, useState} from 'react';
import Card from '../Card/Card'
import './Deck.css'
import cardList from "../../Database/CardData";

const Deck = ({playerTurn}) => {
    const [cards, setCards] = useState(cardList);
    const [deckCards, setDeckCards] = useState([]);

    const startDeckCards = () =>
    {
        let deckCardsLoop = [];
        if (cards && cards.length !== 5) {
            for (let i = 0; i < 5; i++) {
                const index = Math.floor(Math.random() * cards.length)
                deckCardsLoop.push(cards[index]);
                let cardsInStock = cards;
                cardsInStock.splice(index, 1);
                setCards(cardsInStock);
            }
            setDeckCards(deckCardsLoop);
        }

        return deckCardsLoop;
    }


    useEffect(() => {
    })
    const removeCard = (index) =>
    {
        let newCards = deckCards;
        newCards.splice(index, 1);
        setDeckCards(newCards);
    }
    return (
        <div className="deck-container">
            { deckCards.length === 0 && <button onClick={() => startDeckCards()}>Piocher</button> }
            { deckCards.length > 0 && deckCards.map((card, index) => {
                return(
                    <Card
                        key={card.title}
                        index={index}
                        {...card}
                        playerTurn={playerTurn}
                        removeCard={removeCard}
                    />
                    );
                })
            }
        </div>
    );
};

export default Deck;